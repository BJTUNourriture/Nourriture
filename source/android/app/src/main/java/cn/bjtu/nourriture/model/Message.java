package cn.bjtu.nourriture.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by sylflo on 12/9/15.
 */
public class Message {

    @SerializedName("message")
    @Expose
    private String message;

    /**
     * @return The message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message The message
     */
    public void setMessage(String message) {
        this.message = message;
    }
}


