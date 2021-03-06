/* globals module */
let dataUtils = require("./utils/data-utils");

module.exports = function(models) {
    let { Diary } = models;

    return {
        getAllDiaries() {
            return dataUtils.getAll(Diary);
        },
        getDiaryById(id) {
            return dataUtils.getOneById(Diary, id);
        },
        createDiary(diary) {
            return new Promise((resolve) => {
                    let newDiary = new Diary({
                        title: diary.title,
                        author: diary.author,
                        place: diary.place,
                        category: diary.category,
                        content: diary.content,
                        postDate: diary.postDate,
                        mainImage: diary.mainImage,
                        images: diary.images,
                        likes: 0,
                        dislikes: 0
                    });

                    resolve(newDiary);
                })
                .then((newDiary) => {
                    return dataUtils.save(newDiary);
                });
        },
        addComment(comment) {
            let id = comment.diaryId;
            return new Promise((resolve) => {
                dataUtils.getOneById(Diary, id)
                    .then((diary) => {
                        let newComment = {
                            author: comment.author,
                            profileImgURL: comment.profileImgURL,
                            body: comment.body,
                            postDate: comment.postDate
                        };

                        diary.comments.push(newComment);
                        dataUtils.update(diary);
                        return resolve(newComment);
                    });
            });

        }
    };
};