package cn.bjtu.nourriture.model;

/**
 * Author : juliengenoud
 * 30/11/15
 **/

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
    private String _id;
    private String username;
    private String email;
    private String first_name;
    private String last_name;

    public String get_id() {
        return _id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstname() {
        return first_name;
    }

    public String getLastname() {
        return last_name;
    }
}
