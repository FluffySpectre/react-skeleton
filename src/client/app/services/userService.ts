import * as $ from 'jquery';
import { UserViewModel } from '../viewmodels';

export class UserService {
    public static GetAll(): JQueryPromise<Array<UserViewModel>> {
        return $.getJSON('/users');

        /*return $.ajax({
            url: "http://192.9.248.135:8080/users",
        
            // The name of the callback parameter, as specified by the YQL service
            jsonp: "callback",
            crossDomain: true,

            // Tell jQuery we're expecting JSONP
            dataType: "jsonp"
        });*/

       // return $.getJSON('http://192.9.248.135:8080/users');
    }
}