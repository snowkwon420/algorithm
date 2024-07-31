function solution(num_list) {
    num_list.sort((a, b) => a-b);
    for(i=100; i>5; i--){
        num_list.splice(5)
    }
    return num_list;
}