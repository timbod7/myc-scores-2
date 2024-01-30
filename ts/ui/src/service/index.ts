import { HttpFetch } from "./http";
import * as API from "@/adl-gen/protoapp/apis/ui";
import { ServiceBase } from "./service-base";
import { RESOLVER } from "../adl-gen/resolver";


const api = API.makeApiRequests({});

export class Service extends ServiceBase {
  constructor(
    http: HttpFetch,
    baseUrl: string,
  ) {
    super(http, baseUrl, RESOLVER);
  }

  ping = this.mkPostFn(api.ping);
  login = this.mkPostFn(api.login);
  newMessage = this.mkAuthPostFn(api.newMessage);
  recentMessages = this.mkAuthPostFn(api.recentMessages);
  whoami = this.mkAuthGetFn(api.whoAmI);
};
