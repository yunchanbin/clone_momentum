const player = {
    name: "nice",
    point: 10,
    fat: true,
};
console.log(player);
// player의 name만 출력하려고 할 때, 아래 두가지 방법으로 출력할 수 있다.
console.log(player.name);
console.log(player["name"]);
// 새로운 항목을 추가할 수도 있고,
player.lastName = "potato";
// 기존 항목의 값을 업데이트 할 수도 있다.
player.fat = false;
console.log(player);