
// var threshold = 50;//if sync.get fails, we use 50 as a default.

// chrome.storage.sync.get({
//   threshold: '50'
// }, function(items) {
//   threshold = items.threshold;
// });

// //deal with newly loaded tweets
// function DOMModificationHandler(){
//     $(this).unbind('DOMSubtreeModified.event1');
//     setTimeout(function(){
//         modify();
//         $('#timeline').bind('DOMSubtreeModified.event1',DOMModificationHandler);
//     },10);
// }
// $('#timeline').bind('DOMSubtreeModified.event1',DOMModificationHandler);

function check() {
    jQuery('span:contains("Follows you")').parent().parent().hide();
    jQuery('span:contains("Following")').parent().parent().hide();
    jQuery('span:contains("Followers")').parent().parent().hide();
    jQuery('div[data-testid="retweet"]').children().children('.r-1udh08x').hide();
    jQuery('div[data-testid="like"]').children().children('.r-1udh08x').hide();
    jQuery('div[data-testid="unretweet"]').children().children('.r-1udh08x').hide();
    jQuery('div[data-testid="unlike"]').children().children('.r-1udh08x').hide();
    jQuery('svg[aria-label="Verified account"]').parent().hide();
    // jQuery('div[data-testid="tweet"]').children().children('.r-1udh08x').hide();
    // console.log(jQuery('div[data-testid="tweet"]').children().children().children().children().children());
    // console.log(jQuery('div[data-testid="unlike"]').children().children());
};

setTimeout(check, 5000);
