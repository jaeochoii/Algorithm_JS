function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9-_\.]/g, '');
    new_id = new_id.replace(/\.+/g, '.');
    if(new_id[0] === '.') {
        const arr = new_id.split('');
        arr.shift();
        new_id = arr.join('');
    }
    if(new_id[new_id.length - 1] === '.') {
        const arr = new_id.split('');
        arr.pop();
        new_id = arr.join('');
    }
    if(new_id.length === 0) new_id = 'a';
    if(new_id.length >= 16) {
        let arr = new_id.split('');
        arr = arr.splice(0, 15);
        if(arr[14] === '.') arr.pop();
        new_id = arr.join('');
    }
    if(new_id.length <= 2) {
        const lastWord = new_id[new_id.length - 1];
        
        while(new_id.length < 3) {
            new_id += lastWord;
        }
    }
    return new_id;
}