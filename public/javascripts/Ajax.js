$(document).ready(function () {

    $.getJSON("api/todo")
        .done(function (data) {
            addtodos(data)

        })
        .fail(function (err) {
            console.log(err);
        });

    $("#todoInput").keypress(function (event) {
        if (event.which == 13) {
            console.log("key pressed");
            createtodo();
        }
    })

    $('.list').on('click', 'span', function () {
        //$(this).parent().remove();

        var deleteURl = 'api/todo/' + $(this).parent().data('id')

        $.ajax({
            method: 'DELETE',
            url: deleteURl
        })
            .then(function (data) {
                console.log(data);
            })

        $(this).parent().remove();


    })



})



function addtodos(todos) {
    todos.forEach(todo => {
        addtodo(todo)
    });
}


function addtodo(todo) {

    var newtodo = $('<li class="task" >' + todo.name + '<span>X</span> </li>');
    newtodo.data('id', todo._id);
    if (todo.completed) {
        newtodo.addClass = ("done");
    }
    $('.list').append(newtodo);
}


function createtodo() {
    var Userinput = $("#todoInput").val();
    console.log(Userinput);
    $.post("/api/todo", { name: Userinput })
        .then(function (data) {
            addtodo(data);
        })
        .catch(function (err) {
            console.log(err);
        })
}
