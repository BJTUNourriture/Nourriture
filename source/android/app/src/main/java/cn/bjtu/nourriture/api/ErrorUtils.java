package cn.bjtu.nourriture.api;

import android.util.Log;

import com.squareup.okhttp.ResponseBody;

import java.io.IOException;
import java.lang.annotation.Annotation;

import cn.bjtu.nourriture.model.ErrorLogin;
import retrofit.Converter;
import retrofit.Response;
import retrofit.Retrofit;

/**
 * Created by sylflo on 11/26/15.
 */
public class ErrorUtils {

    static final String Tag = "ErrorUtils";

    public static ErrorLogin parseError(ResponseBody response, Retrofit retrofit) {
        Converter<ResponseBody, ErrorLogin> converter =
                retrofit.responseConverter(ErrorLogin.class, new Annotation[0]);

        ErrorLogin error;

        try {
            Log.d(Tag, response.string());
            error = converter.convert(response);

            if (error != null) {
                Log.d(Tag, "Not null");
            } else {
                Log.d(Tag, "Problem");
            }

        } catch (IOException e) {
            return new ErrorLogin();
        }

        return error;
    }
}