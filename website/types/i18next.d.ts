import type common from "public/locales/en/common.json";
import type dashboard from "public/locales/en/dashboard.json";
import type index from "public/locales/en/index.json";
import type labelling from "public/locales/en/labelling.json";
import type language from "public/locales/en/language.json";
import type leaderboard from "public/locales/en/leaderboard.json";
import type message from "public/locales/en/message.json";
import type side_menu from "public/locales/en/side_menu.json";
import type tasks from "public/locales/en/tasks.json";
import type tos from "public/locales/en/tos.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      dashboard: typeof dashboard;
      index: typeof index;
      leaderboard: typeof leaderboard;
      tasks: typeof tasks;
      message: typeof message;
      labelling: typeof labelling;
      language: typeof language;
      side_menu: typeof side_menu;
      tos: typeof tos;
    };
  }
}
