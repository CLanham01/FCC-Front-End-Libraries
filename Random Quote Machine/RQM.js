//setting up color themes
const colorTheme = [
    { background: '#0523A8', textColor: '#5F7AF5', quoteBackGround: '#F5EDD5' },
    { background: '#0AA0A8', textColor: '#67EEF5', quoteBackGround: '#F5E6DC' },
    { background: '#1DA80A', textColor: '#79F568', quoteBackGround: '#F5DCED' },
    { background: '#A89B05', textColor: '#F5E85B', quoteBackGround: '#DAD0F5' },
    { background: '#A86904', textColor: '#F5B853', quoteBackGround: '#C9E0F5' },
    { background: '#A82505', textColor: '#F57455', quoteBackGround: '#CBF5E7' },
    { background: '#A80541', textColor: '#F55791', quoteBackGround: '#CEF5D1' },
    { background: '#A805A6', textColor: '#F555F3', quoteBackGround: '#D9F5CB' },
    { background: '#6705A8', textColor: '#B65AF5', quoteBackGround: '#F0F5D0' },
    { background: '#2204A8', textColor: '#7254F5', quoteBackGround: '#F5F0C9' },
    { background: '#4F2CA8', textColor: '#B197F5', quoteBackGround: '#F5F3DC' },
]

function setColorTheme() {
    var currentTheme = colorTheme[Math.floor(Math.random() * Math.floor(colorTheme.length - 1))];
    var currentBackground = currentTheme.background;
    var currentQuoteBackGround = currentTheme.quoteBackGround;
    var currentTextColor = currentTheme.textColor;

    $("body").css("background-color", currentBackground);
    $(".quote-box").css({
        "background-color": currentQuoteBackGround,
        "color": currentTextColor
    });
}

//obtaining verse data
var verseData;
function getVerseData() {
    return $.ajax({
        headers: {
            Accept: 'application/json',
        },
        url: 'https://type.fit/api/quotes',
        success: function (jsonVerse) {
            if (typeof jsonVerse === 'string') {
                verseData = JSON.parse(jsonVerse);
                console.log('verseData');
                console.log(verseData);
            }
        }

    });
}

//selecting random quote object and assigning to variable.
var quoteText = '';
var authorText = '';

function selectVerse() {
    let currentObj = verseData[Math.floor(Math.random() * Math.floor(verseData.length - 1))];
    quoteText = `"${currentObj.text}"`;
    authorText = `--${currentObj.author}`;

    $("#text").text(quoteText);
    $("#author").text(authorText);

    $("#tweet-quote").attr('href', 'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent('"' + quoteText + '"  --' + authorText));
}



//document ready statement
$(document).ready(function () {
    setColorTheme();
    getVerseData().then(() => {
        selectVerse();
    });

    $("#new-quote").on("click", function () {
        setColorTheme();
        selectVerse();
    });
});