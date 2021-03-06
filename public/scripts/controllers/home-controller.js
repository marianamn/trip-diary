/* globals window*/

import $ from "jquery";
import Handlebars from "handlebars";
import { UTILS } from "utils";
import { templatesLoader } from "templates";
import { tripsDiariesData } from "diariesData";

const TRIPS_BY_PAGE = 6;
const CHARS_TO_SHOW = 90;
const MOST_LIKED_DIARIES = 7;

let homeController = (function() {
    class HomeConroller {
        constructor(data, templates) {
            this.data = data;
            this.templates = templates;
        }

        home() {
            let mostLikedDieries,
                recentDieries,
                diariesByCategories,
                tripsData;

            Promise.all([this.data.getAllTripsDiaries()])
                .then(([allTrips]) => {
                    let trips = allTrips.data;

                    mostLikedDieries = UTILS.HELPER_FUNCTIONS.getMostLikedTripsDiaries(trips, MOST_LIKED_DIARIES);
                    recentDieries = UTILS.HELPER_FUNCTIONS.getRecentTripsDiaries(trips, TRIPS_BY_PAGE, CHARS_TO_SHOW);
                    diariesByCategories = UTILS.HELPER_FUNCTIONS.getCategories(trips);

                    tripsData = {
                        mostLikedDieries: mostLikedDieries,
                        recentDieries: recentDieries,
                        diariesByCategories: diariesByCategories
                    };

                    // console.log(tripsData);
                    return this.templates.get("home");
                })
                .then((html) => {
                    let compiledTemplate = Handlebars.compile(html);
                    $("#content").html(compiledTemplate(tripsData));

                    $("#btn-search").on("click", (evt) => {
                        evt.preventDefault();

                        let text = $("#search").val();
                        window.location = `#/search/${text}`;

                        return false;
                    });

                    $("#categories-repeat.btn-search-1").on("click", (evt) => {
                        evt.preventDefault();

                        let textSmall = $("#search-1").val();
                        window.location = `#/search/${textSmall}`;

                        return false;
                    });


                    $(".carousel-item").first()
                        .addClass("active");
                });
        }
    }

    let homeConroller = new HomeConroller(tripsDiariesData, templatesLoader);

    return {
        home: function() {
            return homeConroller.home();
        }
    };
}());

export { homeController };