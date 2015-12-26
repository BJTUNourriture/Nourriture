package cn.bjtu.nourriture.model;

/**
 * Author : juliengenoud
 * 30/11/15
 **/

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

/***
 * {String} _id id of the user
 * {String} username Name of the user
 * {String} email Email of the user
 * {String} [description] Description of the user
 * {String} [gender] Gender of the person
 * {Object[]} [alergy] List of allergy
 * {ObjectId} alergy.id_ingredient Id of the ingredient
 * {String} alergy.name Name of the ingredient
 * {Object[]} [religion] Religion of the user
 * {ObjectId} religion.id_religion Id of the religion
 * {String} religion.name Name of the religion
 * {Object[]} [pictures] List of user pictures
 * {String} pictures.thumbnail_url Url of the thumbnail version of the picture
 * {String} pictures.medium_sized_url Url of the medium size version of the picture
 * {String} [pictures.big_sized_url] Url of the big size version of the picture
 * {Object[]} [joined_groups]
 * {ObjectId} joined_groups.id_group Group Id
 * {String} joined_groups.name Name of the group
 * {Object[]} [like] List of the ingredients a person like
 * {ObjectId} like.id_ingredient Id of the ingredient liked
 * {String} like.name_ingredient Name of the ingredient liked
 * {Object[]} [dislike] List of the ingredients a person dislike
 * {ObjectId} dislike.id_ingredient Id of the ingredient disliked
 * {String} dislike.name_ingredient Name of the ingredient disliked
 * {Object[]} [follow] List of people followed by a person
 * {ObjectId} follow.id_person Id of the person followed
 * {String} follow.username Username of the person followed
 * {Object[]} [followed_by] List of the people following the person
 * {ObjectId} followed_by.id_person Id of the person following the person
 * {String} followed_by.username Username of the person following the person
 */

public class User {

    @SerializedName("_id")
    @Expose
    private String Id;
    @SerializedName("email")
    @Expose
    private String email;
    @SerializedName("username")
    @Expose
    private String username;
    @SerializedName("__v")
    @Expose
    private Integer V;
    @SerializedName("followed_by")
    @Expose
    private List<Object> followedBy = new ArrayList<Object>();
    @SerializedName("follow")
    @Expose
    private List<Object> follow = new ArrayList<Object>();
    @SerializedName("dislike")
    @Expose
    private List<Object> dislike = new ArrayList<Object>();
    @SerializedName("like")
    @Expose
    private List<Object> like = new ArrayList<Object>();
    @SerializedName("joined_groups")
    @Expose
    private List<Object> joinedGroups = new ArrayList<Object>();
    @SerializedName("pictures")
    @Expose
    private List<Object> pictures = new ArrayList<Object>();
    @SerializedName("religion")
    @Expose
    private List<Object> religion = new ArrayList<Object>();
    @SerializedName("alergy")
    @Expose
    private List<Object> alergy = new ArrayList<Object>();
    @SerializedName("email_verified")
    @Expose
    private Boolean emailVerified;

    /**
     *
     * @return
     * The Id
     */
    public String getId() {
        return Id;
    }

    /**
     *
     * @param Id
     * The _id
     */
    public void setId(String Id) {
        this.Id = Id;
    }

    /**
     *
     * @return
     * The email
     */
    public String getEmail() {
        return email;
    }

    /**
     *
     * @param email
     * The email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     *
     * @return
     * The username
     */
    public String getUsername() {
        return username;
    }

    /**
     *
     * @param username
     * The username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     *
     * @return
     * The V
     */
    public Integer getV() {
        return V;
    }

    /**
     *
     * @param V
     * The __v
     */
    public void setV(Integer V) {
        this.V = V;
    }

    /**
     *
     * @return
     * The followedBy
     */
    public List<Object> getFollowedBy() {
        return followedBy;
    }

    /**
     *
     * @param followedBy
     * The followed_by
     */
    public void setFollowedBy(List<Object> followedBy) {
        this.followedBy = followedBy;
    }

    /**
     *
     * @return
     * The follow
     */
    public List<Object> getFollow() {
        return follow;
    }

    /**
     *
     * @param follow
     * The follow
     */
    public void setFollow(List<Object> follow) {
        this.follow = follow;
    }

    /**
     *
     * @return
     * The dislike
     */
    public List<Object> getDislike() {
        return dislike;
    }

    /**
     *
     * @param dislike
     * The dislike
     */
    public void setDislike(List<Object> dislike) {
        this.dislike = dislike;
    }

    /**
     *
     * @return
     * The like
     */
    public List<Object> getLike() {
        return like;
    }

    /**
     *
     * @param like
     * The like
     */
    public void setLike(List<Object> like) {
        this.like = like;
    }

    /**
     *
     * @return
     * The joinedGroups
     */
    public List<Object> getJoinedGroups() {
        return joinedGroups;
    }

    /**
     *
     * @param joinedGroups
     * The joined_groups
     */
    public void setJoinedGroups(List<Object> joinedGroups) {
        this.joinedGroups = joinedGroups;
    }

    /**
     *
     * @return
     * The pictures
     */
    public List<Object> getPictures() {
        return pictures;
    }

    /**
     *
     * @param pictures
     * The pictures
     */
    public void setPictures(List<Object> pictures) {
        this.pictures = pictures;
    }

    /**
     *
     * @return
     * The religion
     */
    public List<Object> getReligion() {
        return religion;
    }

    /**
     *
     * @param religion
     * The religion
     */
    public void setReligion(List<Object> religion) {
        this.religion = religion;
    }

    /**
     *
     * @return
     * The alergy
     */
    public List<Object> getAlergy() {
        return alergy;
    }

    /**
     *
     * @param alergy
     * The alergy
     */
    public void setAlergy(List<Object> alergy) {
        this.alergy = alergy;
    }

    /**
     *
     * @return
     * The emailVerified
     */
    public Boolean getEmailVerified() {
        return emailVerified;
    }

    /**
     *
     * @param emailVerified
     * The email_verified
     */
    public void setEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

}


