package cn.bjtu.nourriture.api;

import cn.bjtu.nourriture.model.User;
import retrofit.http.GET;
import retrofit.http.Path;
import rx.Observable;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public interface NourritureService {
    String SERVICE_ENDPOINT = "http://192.168.43.182:8101/api";

    @GET("/users/username/{login}")
    Observable<User> getUser(@Path("login") String login);


}
