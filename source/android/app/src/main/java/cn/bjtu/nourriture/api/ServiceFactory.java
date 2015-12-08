package cn.bjtu.nourriture.api;

import retrofit.GsonConverterFactory;
import retrofit.Retrofit;
import retrofit.RxJavaCallAdapterFactory;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class ServiceFactory {

    static String API_IP = "10.0.2.2";
    static String SERVICE_ENDPOINT = "http://" + API_IP + ":8101/api/";

    public static <T> T createRetrofitService(final Class<T> clazz) {
        final Retrofit restAdapter = new Retrofit.Builder()
                .baseUrl(SERVICE_ENDPOINT)
                .addConverterFactory(GsonConverterFactory.create())
                .addCallAdapterFactory(RxJavaCallAdapterFactory.create())
                .build();
        T service = restAdapter.create(clazz);
        return service;
    }
}