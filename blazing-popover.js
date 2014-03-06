BlazingPopover = function(element, options) {
  this.init('popover', element, options);
}

if (!$.fn.tooltip) throw new Error('BlazingPopover requires popover.js')

BlazingPopover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
  placement: 'right',
  trigger: 'click',
  content: '',
  html: true,
  template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
});

BlazingPopover.prototype = $.extend($.fn.popover.Constructor.prototype)

BlazingPopover.prototype.constructor = BlazingPopover
  
BlazingPopover.prototype.getDefaults = function() {
  return BlazingPopover.DEFAULTS
}
  
BlazingPopover.prototype.setContent = function() {
  var $tip    = this.tip()
  var title   = this.getTitle()

  $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)

  if(!this.content) {
    UI.materialize(this.getContent(), $tip.find('.popover-content').get(0))
  }
  
  $tip.removeClass('fade top bottom left right in')

  // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
  // this manually by checking the contents.
  if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
}
  
BlazingPopover.prototype.getContent = function() {
  var o = this.options;

  if(!this.content) {
    this.content = o.content.extend({
      popover: this
    });
  }
  return this.content;
}

$.fn.blazingPopover = function (option) {
  return this.each(function () {
    var $this   = $(this)
    var data    = $this.data('bs.popover')
    var options = typeof option == 'object' && option

    if (!data && option == 'destroy') return
    if (!data) $this.data('bs.popover', (data = new BlazingPopover(this, options)))
    if (typeof option == 'string') data[option]()
  })
}

$.fn.blazingPopover.Constructor = BlazingPopover