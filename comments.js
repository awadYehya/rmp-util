/**
 * Contains all comment Areas created
 * @type {Array}
 */
var allCommentAreas = [];

/**
 * Comment Area for a professor
 *
 * @param nameElement
 * @param comments
 * @constructor
 */
var CommentArea = function(nameElement, comments) {
  this.entireBlock = document.createElement('div');
  this.$entireBlock = $(this.entireBlock);
  this.body = document.getElementsByTagName('body')[0];
  this.commentImages = ['data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRjYwM0U2RkI4RjcxMUUzOTZDNkY5NjRBQjgxQjMxNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRjYwM0U3MEI4RjcxMUUzOTZDNkY5NjRBQjgxQjMxNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFGNjAzRTZEQjhGNzExRTM5NkM2Rjk2NEFCODFCMzE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFGNjAzRTZFQjhGNzExRTM5NkM2Rjk2NEFCODFCMzE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAJQAoAwERAAIRAQMRAf/EAH0AAQACAwEAAAAAAAAAAAAAAAAFBgEDBAcBAQADAAMBAAAAAAAAAAAAAAAEBQYBAgMHEAACAgIBAgUFAAAAAAAAAAABAgADEQQFIRIxQWEiBlFxgSMUEQACAgEDAgQHAAAAAAAAAAAAAQIDESESBDEFQWGRE1FxgaEiFAb/2gAMAwEAAhEDEQA/APXJ8UNSIAgCAIBu1aqrdmuq1yiOwUsoyRnoOn3kji1xnZGMniLeMo6WSai2iw2fD9eutnbaftUEn2Dymvs/kq4xcnZLC8kVq7i28bUV6mvXfaFbWMKS2BYBlseRxMjTXXK1RbexvrjX0LGUmo5xqWI/DtdULnbftAyfYPDxmuf8lWo7vclj5Irl3GWcbUVlwodghygJ7SehIz0MxU0k3joWi6amASCCDgjqDOE8aoHfbz/K26/873frIwSBhiPUy2t75yp1+25fj9/Ujx4lallIj5UkkkhznM26511sLoBhiq5bHqwlwu9cyyv21LKx4LX1Iv6tSlnBGymJQgCAdWnt0a6t36tew5OUazOF/EncTlQqT3Vxsl4bvD6HjZW5dJNG63nORsQorrTWRjsqUKMfSSLe9ciS2pqEfhFYOkeLBa9X5kfKkkiAIAgCAIB//9k=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAIAAAC/AjzkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTVCMDMxNUQ5NjVBMTFFMzlENjRCMUI0NkZBQzU3NjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTVCMDMxNUU5NjVBMTFFMzlENjRCMUI0NkZBQzU3NjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NjAxOTdDRTkzM0QxMUUzOUQ2NEIxQjQ2RkFDNTc2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NUIwMzE1Qzk2NUExMUUzOUQ2NEIxQjQ2RkFDNTc2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhkA5ckAAAIDSURBVHja7JbLSgJhFMd1bl7GLEe70ZjhJghxUXTZtY1aRLueozbRC1SbeoZeICKIoHqAiMiQIoISQi20dJocHZsZp05GFxS/uRi5aD5mMR7+//PzO3PmO2PfiY3ZWrEwW4uWBbbAFvjvwHaPc4DEvfozghgsYETLCGSKtrHwOkNHVVWKp1aT+V1NapCZibJLGEbli/HjxIJcKZjZcYRdBOq7CKOiweXqPlALBCADMdyDEexmSu0kA6xv6ltnJ8Kd82gwCED29RPskMQw2O8ZrnlOAc8IGlwnsFeTGAS7qd6aiKsuoilwN7YgnjFe2991ER0C3DC4LGc1I81YGoJzQkwz0oylIbgkpR+Fk5+R29w2GlwjADskMfMex5MrZfnh4/46s5kvnqHBIADZZ5EfwI5qCPQ3FxxeXd6JknTPFc91Hpk+OgLNnH0+Qhxb2uB/ORahdBThM5QUDiwCp81PJ1gOghkPb+CY8447THF7OeFUfVUQ4p72yVBgrt01ePu4FU+tmQeThJcvXQXaRllmGq6KKnKli4J4I8oZSeGrw4N0kAxNsR3uoa/xJVcECdlZepsLMob8s7AbN9WHkEEx8kIs/XSQ5vbhL/4C+HsMkN2wM9rZ7yK7cMyFY5SilmWFL0rpgpjgxcuK+qIzFWGoa6DCIp+x8dZXpgW2wBYY1psAAwCqJL2e6JDgwgAAAABJRU5ErkJggg==', 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQTcwMzMwMEI4RjcxMUUzOTZDNkY5NjRBQjgxQjMxNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQTcwMzMwMUI4RjcxMUUzOTZDNkY5NjRBQjgxQjMxNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFGNjAzRTc1QjhGNzExRTM5NkM2Rjk2NEFCODFCMzE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFGNjAzRTc2QjhGNzExRTM5NkM2Rjk2NEFCODFCMzE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAJQAoAwERAAIRAQMRAf/EAH0AAQADAQAAAAAAAAAAAAAAAAABBgcDAQEAAgMBAQAAAAAAAAAAAAAAAQMCBQYEBxAAAAQFAwMFAQEAAAAAAAAAAAECBREDEwQGMRIUIVEVQWEyFgciFxEAAQMCBAUFAAAAAAAAAAAAAAECAxEEIVESE0FxkSIFMeEUFQb/2gAMAwEAAhEDEQA/AKUPCfbwAAAAAAB6ASbbhP4Vjbq12rtdu0y+t7hJLpW5Uke5b/n00F7YkXE4jyX6eeKR0bWI1Uzx9jP/AK+2/wCoeB4x+O5/G41X+qe3Sr39YiundQ6D5b/g71e/RWtOPI0DNvwrG2psuna0dpljb26TXSuCqo9i3/ProLHRImJz/jf088r0jcxHKuWHsYkWnYUHbgCCw45lubN8hTWwXt0mXMM1Fa25HMMjVqpCSIzIzGTXLwNfeWFrIu5M1vNcCfpefb+d4dwrbqtajNqb4x3aboxDSpH2VpTRrZT0pVKEZHlubOEhLW/3t0qXLMlHa3BHLMzTopaTIjMyBzl4k2dhaxruQtbzTErwxNgABYmfPsmZWc2tpnos5SlqmKuZctPIM1elU49C7DJHqiYGuuPFQTSbkialyr29Dh94zOtW83eVYx31TjERqXMs+stqU2205Hd5z/JnpnJrdp6LyUlaZibmZLTyCNPpVKHQ+wlXqqUUrt/FQQybkaaVyr29CujE2IAAAAAAAAf/2Q=='];
  this.numOfComments = 0;
  this.$nameElem = $(nameEleme);
  this.visible = false;
  var _this = this;

  /**
   * Adds the slideEffect
   */
  var  slideEffect = function(){
    if (_this.visible === false) {
      // Close all others first
      for (var i = 0; i < allCommentAreas.length; i += 1) {
        allCommentAreas[i].$entireBlock.stop(true);
        allCommentAreas[i].close();
      }
      // Open this one
      _this.show();
    }
  };

  // For all comments in the array add it
  for (var i = 0; i < comments.length; i += 1) {
    var comment = comments[i];
    this.newComment(comment);
  }
  this.$nameElem.bind('mouseover', slideEffect);

  // Add the commentArea to an array
  allCommentAreas.push(this);
};

/**
 * Creates all the elements needed for the new comment area
 */
CommentArea.prototype.newCommentArea = function() {
  this.singleComment = {};
  if (this.numOfComments == 1) {
    this.singleComment.xIcon = document.createElement('a');
  }
  this.singleComment.contentSection = document.createElement('div');
  this.singleComment.entireContentSection = document.createElement('div');
  this.singleComment.commentsImage = document.createElement('img');
  this.singleComment.topContentSection = document.createElement('div');
  this.singleComment.contentHeader = document.createElement('h3');
  this.singleComment.middleContent = document.createElement('span');
  this.singleComment.contentBottom = document.createElement('a');
  this.singleComment.tagSection = document.createElement('div');
  this.singleComment.tag = document.createElement('div');
  this.singleComment.hrLine = document.createElement('div');
  this.singleComment.commentSpliter = document.createElement('hr');
  this.singleComment.break = document.createElement('br');
};

/**
 * Assigns the new set of elements IDS
 */
CommentArea.prototype.assignID = function() {
  this.entireBlock.id = 'entire-block';
  if (this.numOfComments == 1) {
    this.singleComment.xIcon.id = 'x';
  }
  this.singleComment.contentSection.id = 'content-section';
  this.singleComment.entireContentSection.id = 'entire-content-section';
  this.singleComment.commentsImage.id = 'comments-image';
  this.singleComment.topContentSection.id = 'top-content-section';
  this.singleComment.contentHeader.id = 'content-header';
  this.singleComment.middleContent.id = 'middle-content';
  this.singleComment.contentBottom.id = 'content-bottom';
  this.singleComment.tagSection.id = 'tag-section';
  this.singleComment.tag.id = 'tag';
  this.singleComment.hrLine.id = 'hr-line';
  this.singleComment.commentSpliter.id = 'comment-splitter';
};

/**
 * Assigns the new set of elements bootstrap Class Names
 */
CommentArea.prototype.assignClassName = function() {
  this.entireBlock.className = 'container-fluid'; /* entire-block */
  // this.singleComment.xIcon.className = ''; /* x icon */
  this.singleComment.contentSection.className = ''; /* content-section */
  this.singleComment.entireContentSection.className = ''; /* entire-content-section */
  this.singleComment.commentsImage.className = ''; /* comments-image */
  this.singleComment.topContentSection.className = ''; /* top-content-section */
  this.singleComment.contentHeader.className = 'row'; /* content-header */
  this.singleComment.middleContent.className = ''; /* middle-content */
  this.singleComment.contentBottom.className = ''; /* content-bottom */
  this.singleComment.tagSection.className = ''; /* tag-section */
  this.singleComment.tag.className = ''; /* tag */
  this.singleComment.hrLine.className = ''; /* hr-line */
  this.singleComment.commentSpliter.className = ''; /* comment-splitter */
};

/**
 * Builds the DOM relationship for each comment section
 */
CommentArea.prototype.buildCommentArea = function() {
  if (this.numOfComments == 1) {
    this.entireBlock.appendChild(this.singleComment.xIcon);
  }
  this.entireBlock.appendChild(this.singleComment.contentSection);
  this.singleComment.contentSection.appendChild(this.singleComment.entireContentSection);
  this.singleComment.entireContentSection.appendChild(this.singleComment.commentsImage);
  this.singleComment.entireContentSection.appendChild(this.singleComment.topContentSection);
  this.singleComment.topContentSection.appendChild(this.singleComment.contentHeader);
  this.singleComment.topContentSection.appendChild(this.singleComment.middleContent);
  this.singleComment.entireContentSection.appendChild(this.singleComment.contentBottom);
  this.singleComment.entireContentSection.appendChild(this.singleComment.break);
  this.singleComment.entireContentSection.appendChild(this.singleComment.tagSection);
  this.singleComment.tagSection.appendChild(this.singleComment.tag);
  this.singleComment.contentSection.appendChild(this.singleComment.hrLine);
  this.singleComment.hrLine.appendChild(this.singleComment.commentSpliter);
  this.body.appendChild(this.entireBlock);
};

/**
 * Injects new content for each comment section
 * @param comment
 */
CommentArea.prototype.injectContent = function(comment) {
  $(this.singleComment.commentsImage).attr('src', this.getImage(comment.rating));
  $(this.singleComment.contentHeader).text(comment.rating+" - "+comment.course);
  $(this.singleComment.middleContent).text(comment.text);
  $(this.singleComment.contentBottom).text(comment.footer);
  $(this.singleComment.tag).text(comment.tag);
  $(this.singleComment.xIcon).text('x');
};

/**
 * Creates the new comment on the page
 * @param comment
 */
CommentArea.prototype.newComment = function(comment) {
  this.numOfComments++;
  this.newCommentArea();
  this.assignID();
  this.assignClassName();
  this.buildCommentArea();
  this.injectContent(comment);
  this.addIconClick();
};

/**
 * Adds a click handler to the xIcon
 */
CommentArea.prototype.addIconClick = function() {
  var _this = this;
  $(this.singleComment.xIcon).click(function() {
    _this.close($(_this.entireBlock));
  });
};

/**
 * Obtains the Image to Inject
 * @param rating
 */
CommentArea.prototype.getImage = function(rating) {
  this.selectImage = {
    'AVERAGE': this.commentImages[0],
    'GOOD': this.commentImages[1],
    'POOR': this.commentImages[2]
  };
  return this.selectImage[rating];
};

/**
 * Shows the comment area
 */
CommentArea.prototype.show = function() {
  this.visible = true;
//   this.$entireBlock.slideDown();
  this.$entireBlock.animate({right: '-1px'});
};

/**
 * Closes the comment area
 */
CommentArea.prototype.close = function() {
  this.visible = false;
//   this.$entireBlock.slideUp();
  this.$entireBlock.animate({right: '-445px'});
};



