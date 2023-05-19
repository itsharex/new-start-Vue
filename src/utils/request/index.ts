import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import Config from "./src/config";
import { isUndefined } from "lodash";
import {
  requestResolve,
  requestReject,
  responseReject,
  responseResolve,
} from "./src/interceptors";
import { getParams, getUrl } from "./src/utils";
import { ElLoading, ElNotification } from "element-plus";

class Http {
  private options: any;
  private initializedPlugins: any;
  public axiosInstance!: AxiosInstance;

  constructor(options: any) {
    // 合并options选项
    this.init(options);

    if (Config.baseURL) {
      Config.axios.baseURL = Config.baseURL;
    }

    // 创建axios实例
    this.axiosInstance = axios.create(this.options.axios);

    this.initGlobalApi();

    this.initAxios(this.axiosInstance);
  }

  private init(options: any): void {
    this.options = { ...Config, ...options };
  }

  private initGlobalApi(): void {
    this.options.$message = (response, isReject = false) => {
      if (isReject) {
        ElNotification({
          title: "Warning",
          message: response.message,
          type: "warning",
        });
        return;
      }

      const { data } = response;
      ElNotification({
        title: "Error",
        message: data?.message,
        type: "error",
      });
    };

    // 自动消息是配弹窗逻辑
    const autoMessageAdapter = (response) => {
      const { data } = response;

      if (isUndefined(data.code)) {
        return false;
      }

      if (data.code === 0) {
        return true;
      }

      return false;
    };
    this.options.$loading = ElLoading.service;
    this.options.$autoMessageAdapter = autoMessageAdapter;
  }

  private initAxios(service: AxiosInstance): void {
    const LOADING = {
      // 存储执行 loading 的请求队列
      loadings: [],
      // 是否正在加载 loading
      isLoading: false,
      // loading 加载实例 用于清除loading
      $loading: null,
    };
    const options = {
      LOADING,
      ...this.options,
    };

    service.interceptors.request.use(
      (config) => {
        return requestResolve({ options, value: config });
      },
      (error) => {
        return requestReject({ options, value: error });
      }
    );

    service.interceptors.response.use(
      (response) => {
        return responseResolve({ options, value: response });
      },
      (error) => {
        return responseReject({ options, value: error });
      }
    );
  }

  public request<T>(method: string, url: string, config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<T>({ method, url, ...config })
        .then((response) => {
          // Cache the response if cacheEnabled is true
          resolve(response.data);
        })
        .catch((error) => {
          const wrapperError = new Error(`Request failed for ${url} ${error}`);
          reject(wrapperError);
        })
        .finally(() => {});
    });
  }

  public get(url: string, params = {}, config?: AxiosRequestConfig) {
    const requestConfig = this.options.requestConfig || {};
    const opts = { ...requestConfig, ...config };
    opts.params = getParams(params, opts);
    return this.axiosInstance.get(url, opts);
  }

  public download(url, params = {}, type = "post", config = {}) {
    const requestConfig = this.options.requestConfig || {};
    const opts = { ...requestConfig, ...config };
    const downloadForm = document.createElement("form");
    downloadForm.setAttribute("method", type);
    downloadForm.setAttribute("hidden", "hidden");
    downloadForm.setAttribute("action", getUrl(url, opts.isApiHost));

    const createInput = (name, value) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", name);
      input.setAttribute("value", value);

      downloadForm.appendChild(input);
    };

    Object.keys(params).forEach((key) => {
      createInput(key, params[key]);
    });

    const $body = document.body || document.getElementsByTagName("body")[0];
    $body.appendChild(downloadForm);
    downloadForm.submit();
    downloadForm.remove();
    $body.removeChild(downloadForm);
  }

  public use(plugin) {
    const installedPlugins =
      this.initializedPlugins || (this.initializedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }
  }
}

export default Http;
