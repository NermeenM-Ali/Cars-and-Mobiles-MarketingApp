package com.udacity;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.pilloxa.backgroundjob.BackgroundJobPackage;
import com.transistorsoft.rnbackgroundfetch.RNBackgroundFetchPackage;
import io.realm.react.RealmReactPackage;
import com.jamesisaac.rnbackgroundtask.BackgroundTaskPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new BackgroundJobPackage(),
            new RNBackgroundFetchPackage(),
            new RealmReactPackage(),
            new BackgroundTaskPackage(),
            new ReactNativeLocalizationPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    BackgroundTaskPackage.useContext(this);
  }
}
