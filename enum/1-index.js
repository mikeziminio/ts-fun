var Statuses;
(function (Statuses) {
    Statuses[Statuses["New"] = 0] = "New";
    Statuses[Statuses["OnModeration"] = 1] = "OnModeration";
    Statuses[Statuses["Public"] = 2] = "Public";
    Statuses[Statuses["Canceled"] = 3] = "Canceled";
})(Statuses || (Statuses = {}));
;
console.log(Statuses.New);
console.log(Statuses);
