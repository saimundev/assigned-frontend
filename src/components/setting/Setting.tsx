import SettingProfileInfo from "./SettingProfileInfo";
import SettingChangePassword from "./SettingChangePassword";
import SettingRestaurantInfo from "./SettingRestaurantInfo";
import SettingSelectLanguage from "./SettingSelectLanguage";
import SettingNotification from "./SettingNotification";
import CommonHeader from "../common/CommonHeader";

const Setting = () => {
  return (
    <div className="space-y-6">
      <CommonHeader
        title="Settings"
        description="Manage your account settings and preferences"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <SettingProfileInfo />
          <SettingChangePassword />
        </div>

        {/* Notification & Language Settings & Restaurant Settings */}
        <div className="flex flex-col gap-6">
          <SettingNotification />
          <SettingSelectLanguage />
          <SettingRestaurantInfo />
        </div>
      </div>
    </div>
  );
};

export default Setting;
