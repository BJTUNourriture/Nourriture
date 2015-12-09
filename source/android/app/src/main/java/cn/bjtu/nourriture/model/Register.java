package cn.bjtu.nourriture.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Register {

    @SerializedName("username")
    @Expose
    private String mUsername;
    @SerializedName("email")
    @Expose
    private String mEmail;
    @SerializedName("password")
    @Expose
    private String mPassword;

    public Register(String username, String password, String email) {
        this.mUsername = username;
        this.mPassword = password;
        this.mEmail = email;
    }

    /**
     * @return The username
     */
    public String getUsername() {
        return mUsername;
    }

    /**
     * @param username The username
     */
    public void setUsername(String username) {
        this.mUsername = username;
    }

    /**
     * @return The email
     */
    public String getEmail() {
        return this.mEmail;
    }

    /**
     * @param email The email
     */
    public void setEmail(String email) {
        this.mEmail = email;
    }

    /**
     * @return The password
     */
    public String getPassword() {
        return mPassword;
    }

    /**
     * @param password The password
     */
    public void setPassword(String password) {
        this.mPassword = password;
    }

}
