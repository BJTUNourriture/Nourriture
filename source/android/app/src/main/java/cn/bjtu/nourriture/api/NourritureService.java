package cn.bjtu.nourriture.api;

import java.util.List;

import cn.bjtu.nourriture.model.Group;
import cn.bjtu.nourriture.model.Login;
import cn.bjtu.nourriture.model.Message;
import cn.bjtu.nourriture.model.Recipe;
import cn.bjtu.nourriture.model.Register;
import cn.bjtu.nourriture.model.Token;
import cn.bjtu.nourriture.model.User;
import cn.bjtu.nourriture.model.Ingredient;
import retrofit.http.Body;
import retrofit.http.GET;
import retrofit.http.POST;
import retrofit.http.Path;
import rx.Observable;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public interface NourritureService {

    @GET("users/username/{login}")
    Observable<User> getUser(@Path("login") String login);

    @GET("recipes")
    Observable<List <Recipe>> getRecipes();

    @POST("users/register")
    Observable<Message> registerUser(@Body Register user);

    @POST("users/sign-in")
    Observable<Token> loginUser(@Body Login user);

    @GET("ingredients/")
    Observable<List <Ingredient>> getIngredients();

    @GET("groups")
    Observable<List <Group>> getGroups();

}
