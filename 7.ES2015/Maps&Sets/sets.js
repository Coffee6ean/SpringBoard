/*
const bannedHashTags = new Set("hello", "goodbye"); 
*/

const bannedHashTags = new Set(
    ["nofilter", "justsaying", "winning", "yolo"]
);

bannedHashTags.add("bestlife").add("selfie");
bannedHashTags.add("yolo");  //Not added

bannedHashTags.has("yolo");  //true
bannedHashTags.has("tbt");  //false

bannedHashTags.delete("winning");
bannedHashTags.clear();

const susansTags = ["happymonday", "yolo", "winning", "sunset"];

function filterHashTags(tags) {
    const bannedHashTags = new Set([
        "nofilter", "justsaying", "winning", "yolo"
    ]);

    return tags.filter((tag) => bannedHashTags.has(tag));
}

const ages = [45,42,21,23,24,98,2,2,4,12,3,12,45];
[...new Set(ages)];
