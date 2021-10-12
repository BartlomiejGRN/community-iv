

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    console.log(`=====${title}=====`);
    for (const item of items) {
        console.log(`${item} ->`)
    }
    console.log(height);
    console.log(width);
}

showMenu('Menu', undefined, 400, ['activate', 'delete', 'clone']);


function showMenuBetter({title = "Untitled", width = 200, height = 100, items = []}) {
    console.log(`=====${title}=====`);
    for (const item of items) {
        console.log(`${item} ->`)
    }
    console.log(height);
    console.log(width);
}


showMenuBetter({items : ['activate', 'delete', 'clone'], title: 'Menu'});


function showMenuTheBest({title = "Untitled", width = 200, height = 100, items = []} = {}) {
    console.log(`=====${title}=====`);
    for (const item of items) {
        console.log(`${item} ->`)
    }
    console.log(height);
    console.log(width);
}

showMenuTheBest();


