$('.search-book').on('click', function () {
    $('.book').empty();
    fetch();
   
});
var fetch = function () {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function (data) {
            var booksList = data.items;
            for(var x = 0;x < booksList.length;x++){
                for(var i = 0;i < booksList[x].volumeInfo.industryIdentifiers.length;i++){
            if(booksList[x].volumeInfo.industryIdentifiers[i].identifier === $('#isbn').val()){
                renderBook(booksList[x]);
            }
        }
        }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            return textStatus;
        }
    });
};
function renderBook(book){
    $('book').empty();
    $('.book').append('<div class="book"><h1>'
    + book.volumeInfo.title +'</h1><p>'+ book.volumeInfo.description +'</p><h1>'+book.volumeInfo.authors +'</h1><img src="'+book.volumeInfo.imageLinks.smallThumbnail +'"></div>');
}
