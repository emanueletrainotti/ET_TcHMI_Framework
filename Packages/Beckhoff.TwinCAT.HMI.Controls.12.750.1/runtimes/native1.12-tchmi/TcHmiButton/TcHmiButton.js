var TcHmi;!function(TcHmi){let Controls;!function(Controls){let Beckhoff;!function(Beckhoff){class TcHmiButton extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__icon={},this.__mousedown=!1,this.__touches=[],this.__state=!1,this.__stateLock=!1,this.__touchLock=!1,this.__touchLockTimeoutId=0,this.__destroyEventOnPropertyIsEnabledChanged=null,this.__onResolverForTextPaddingWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textPadding"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__textPadding)||(this.__textPadding=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextPadding"}),this.__processTextPadding()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiButton, Id="+this.getId()+", Attribute=TextPadding] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForIconPaddingWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("iconPadding"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__icon.imagePadding)||(this.__icon.imagePadding=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconPadding"}),this.__processIconPadding()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiButton, Id="+this.getId()+", Attribute=IconPadding] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForTextColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__textColor)||(this.__textColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextColor"}),this.__processTextColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiButton, Id="+this.getId()+", Attribute=TextColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__destroyStateSymbolWatch=null,this.__mousedownHandler=this.__onMouseDown(),this.__mouseupHandler=this.__onMouseUp(),this.__mouseenterHandler=this.__onMouseEnter(),this.__mouseleaveHandler=this.__onMouseLeave(),this.__touchstartHandler=this.__onTouchStart(),this.__touchEndOrCancelHandler=this.__onTouchEndOrCancel(),this.__contextmenuHandler=this.__onContextMenu()}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiButton-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-button-template")),this.__elementContentTextSpan=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiButton-template-content-text"),0===this.__elementContentTextSpan.length&&(this.__elementContentTextSpan=this.__elementTemplateRoot.find(".tchmi-button-template-content-text")),0===this.__elementTemplateRoot.length||0===this.__elementContentTextSpan.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init(),this.__processIcon();const passiveEventOptions={passive:!0,capture:!1},defaultEventOptions={passive:!1,capture:!1};this.__element[0].addEventListener("mousedown",this.__mousedownHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__element[0].addEventListener("mouseenter",this.__mouseenterHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__element[0].addEventListener("mouseleave",this.__mouseleaveHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__element[0].addEventListener("touchstart",this.__touchstartHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&defaultEventOptions),this.__element[0].addEventListener("touchend",this.__touchEndOrCancelHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&defaultEventOptions),this.__element[0].addEventListener("touchcancel",this.__touchEndOrCancelHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&defaultEventOptions),this.__element[0].addEventListener("contextmenu",this.__contextmenuHandler)}__attach(){super.__attach();document.addEventListener("mouseup",this.__mouseupHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&{passive:!0,capture:!1}),this.__destroyEventOnPropertyIsEnabledChanged=TcHmi.EventProvider.register(this.getId()+".onPropertyChanged<IsEnabled>",this.__onPropertyIsEnabledChanged()),this.__stateSymbol&&!this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch()))}__detach(){super.__detach();document.removeEventListener("mouseup",this.__mouseupHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&{passive:!0,capture:!1}),this.__destroyEventOnPropertyIsEnabledChanged&&(this.__destroyEventOnPropertyIsEnabledChanged(),this.__destroyEventOnPropertyIsEnabledChanged=null),this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null)}destroy(){if(this.__keepAlive)return;const passiveEventOptions={passive:!0,capture:!1},defaultEventOptions={passive:!1,capture:!1};this.__element[0].removeEventListener("mousedown",this.__mousedownHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__element[0].removeEventListener("mouseenter",this.__mouseenterHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__element[0].removeEventListener("mouseleave",this.__mouseleaveHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__element[0].removeEventListener("touchstart",this.__touchstartHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__element[0].removeEventListener("touchend",this.__touchEndOrCancelHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&defaultEventOptions),this.__element[0].removeEventListener("touchcancel",this.__touchEndOrCancelHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&defaultEventOptions),this.__element[0].removeEventListener("contextmenu",this.__contextmenuHandler),super.destroy(),this.__destroyEventOnPropertyIsEnabledChanged&&(this.__destroyEventOnPropertyIsEnabledChanged(),this.__destroyEventOnPropertyIsEnabledChanged=null)}__processState(state,forwardStateSymbol,source){this.__state!==state&&(this.__state=state,this.__element[0].classList.toggle("down",this.__state),TcHmi.EventProvider.raise(this.getId()+(this.__state?".onStatePressed":".onStateReleased"),{control:this}),TcHmi.EventProvider.raise(this.getId()+".onStateChanged",{control:this,state:this.__state,stateOld:!this.__state}),this.__stateSymbol&&forwardStateSymbol&&this.__stateSymbol.write(this.__state,data=>{data.error!==TcHmi.Errors.NONE&&data.details&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module="+this.__type+", Id="+this.getId()+", Property=StateSymbol, "+(this.__stateSymbol?"Symbol = "+this.__stateSymbol.getExpression().toString():"")+"] "+TcHmi.Log.buildMessage(data.details))}))}__onPropertyIsEnabledChanged(){return(e,data)=>{this.getIsEnabled()?!this.__destroyStateSymbolWatch&&this.__stateSymbol&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())):(this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),!0===this.__stateLock&&!0===this.__state?this.__processState(!1,!0,"attribute"):!1===this.__stateLock&&!0===this.__state&&this.__processState(!1,!1,"attribute"),this.__mousedown=!1,this.__stateLock=!1,this.__touches=[])}}__onContextMenu(){return event=>{event.cancelable&&event.preventDefault()}}__onMouseDown(){return event=>{this.__touchLock||0===event.button&&this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&(this.__mousedown=!0,!1===this.__stateLock&&(this.__stateLock=!0,this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),!1===this.__state&&this.__processState(!0,!0,"userInteraction")))}}__onMouseUp(){return event=>{this.__touchLock||0===event.button&&this.__mousedown&&this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&(this.__mousedown=!1,!0===this.__stateLock&&(!0===this.__state&&this.__processState(!1,!0,"userInteraction"),this.__stateLock=!1,!this.__destroyStateSymbolWatch&&this.__stateSymbol&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch()))))}}__onMouseEnter(){return event=>{this.__mousedown&&this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&!1===this.__stateLock&&(this.__stateLock=!0,this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),!1===this.__state&&this.__processState(!0,!0,"userInteraction"))}}__onMouseLeave(){return event=>{this.__mousedown&&this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&!0===this.__stateLock&&(!0===this.__state&&this.__processState(!1,!0,"userInteraction"),this.__stateLock=!1,!this.__destroyStateSymbolWatch&&this.__stateSymbol&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())))}}__onTouchStart(){return event=>{if(!this.getIsEnabled())return;if(!TcHmi.Access.checkAccess(this,"operate"))return;let changedTouches=Array.prototype.slice.apply(event.changedTouches).filter(touch=>touch.target===event.target);0!==changedTouches.length&&(this.__touches=this.__touches.concat(changedTouches),!1===this.__stateLock&&(this.__stateLock=!0,this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),!1===this.__state&&this.__processState(!0,!0,"userInteraction")),this.__touchLock=!0,this.__touchLockTimeoutId&&(clearTimeout(this.__touchLockTimeoutId),this.__touchLockTimeoutId=0),this.__touchLockTimeoutId=setTimeout(()=>{this.__touchLock=!1},500))}}__onTouchEndOrCancel(){return event=>{if(0===this.__touches.length)return;if(!this.getIsEnabled())return;if(!TcHmi.Access.checkAccess(this,"operate"))return;let changedTouchIds=Array.prototype.slice.apply(event.changedTouches).map(touch=>touch.identifier);this.__touches=this.__touches.filter(touch=>-1===changedTouchIds.indexOf(touch.identifier)),this.__touches.length>0||!0===this.__stateLock&&(!0===this.__state&&this.__processState(!1,!0,"userInteraction"),this.__stateLock=!1,!this.__destroyStateSymbolWatch&&this.__stateSymbol&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())))}}setText(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Text")),convertedValue!==this.__text&&(this.__text=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Text"}),this.__processText())}getText(){return this.__text}__processText(){this.__elementContentTextSpan[0].textContent=tchmi_decode_control_characters(this.__text)}setTextPadding(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextPadding"));let resolverInfo=this.__objectResolvers.get("textPadding");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("textPadding",{resolver:resolver,watchCallback:this.__onResolverForTextPaddingWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextPaddingWatchCallback)})}getTextPadding(){return this.__textPadding}__processTextPadding(){TcHmi.StyleProvider.processContentPadding(this.__elementContentTextSpan,this.__textPadding)}setTextHorizontalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toHorizontalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextHorizontalAlignment")),convertedValue!==this.__textHorizontalAlignment&&(this.__textHorizontalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextHorizontalAlignment"}),this.__processTextHorizontalAlignment())}getTextHorizontalAlignment(){return this.__textHorizontalAlignment}__processTextHorizontalAlignment(){this.__textHorizontalAlignment?this.__elementContentTextSpan[0].style.textAlign=this.__textHorizontalAlignment.toLowerCase():this.__elementContentTextSpan[0].style.textAlign=""}setTextVerticalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toVerticalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextVerticalAlignment")),convertedValue!==this.__textVerticalAlignment&&(this.__textVerticalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextVerticalAlignment"}),this.__processTextVerticalAlignment())}getTextVerticalAlignment(){return this.__textVerticalAlignment}__processTextVerticalAlignment(){TcHmi.StyleProvider.processContentVerticalAlignment(this.__elementTemplateRoot,this.__textVerticalAlignment)}setIcon(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Icon")),convertedValue!==this.__icon.image&&(this.__icon.image=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Icon"}),this.__processIcon())}getIcon(){return this.__icon.image}__processIcon(){this.__attributesInitialized&&TcHmi.StyleProvider.processBackground(this.__elementTemplateRoot,this.__icon)}setIconPadding(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconPadding"));let resolverInfo=this.__objectResolvers.get("iconPadding");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("iconPadding",{resolver:resolver,watchCallback:this.__onResolverForIconPaddingWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForIconPaddingWatchCallback)})}getIconPadding(){return this.__icon.imagePadding}__processIconPadding(){this.__processIcon()}setIconWidth(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconWidth")),convertedValue!==this.__icon.imageWidth&&(this.__icon.imageWidth=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconWidth"}),this.__processIconWidth())}getIconWidth(){return this.__icon.imageWidth}__processIconWidth(){this.__processIcon()}setIconWidthUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toDimensionUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconWidthUnit")),convertedValue!==this.__icon.imageWidthUnit&&(this.__icon.imageWidthUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconWidthUnit"}),this.__processIconWidthUnit())}getIconWidthUnit(){return this.__icon.imageWidthUnit}__processIconWidthUnit(){this.__processIcon()}setIconHeight(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconHeight")),convertedValue!==this.__icon.imageHeight&&(this.__icon.imageHeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconHeight"}),this.__processIconHeight())}getIconHeight(){return this.__icon.imageHeight}__processIconHeight(){this.__processIcon()}setIconHeightUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toDimensionUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconHeightUnit")),convertedValue!==this.__icon.imageHeightUnit&&(this.__icon.imageHeightUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconHeightUnit"}),this.__processIconHeightUnit())}getIconHeightUnit(){return this.__icon.imageHeightUnit}__processIconHeightUnit(){this.__processIcon()}setIconHorizontalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toHorizontalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconHorizontalAlignment")),convertedValue!==this.__icon.imageHorizontalAlignment&&(this.__icon.imageHorizontalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconHorizontalAlignment"}),this.__processIconHorizontalAlignment())}getIconHorizontalAlignment(){return this.__icon.imageHorizontalAlignment}__processIconHorizontalAlignment(){this.__processIcon()}setIconVerticalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toVerticalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconVerticalAlignment")),convertedValue!==this.__icon.imageVerticalAlignment&&(this.__icon.imageVerticalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconVerticalAlignment"}),this.__processIconVerticalAlignment())}getIconVerticalAlignment(){return this.__icon.imageVerticalAlignment}__processIconVerticalAlignment(){this.__processIcon()}setTextColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextColor"));let resolverInfo=this.__objectResolvers.get("textColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("textColor",{resolver:resolver,watchCallback:this.__onResolverForTextColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextColorWatchCallback)})}getTextColor(){return this.__textColor}__processTextColor(){TcHmi.StyleProvider.processTextColor(this.__element,this.__textColor)}setTextFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSize")),convertedValue!==this.__textFontSize&&(this.__textFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){TcHmi.StyleProvider.processFontSize(this.__elementContentTextSpan,this.__textFontSize,this.__textFontSizeUnit)}setTextFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),convertedValue!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSizeUnit())}getTextFontSizeUnit(){return this.__textFontSizeUnit}__processTextFontSizeUnit(){TcHmi.StyleProvider.processFontSize(this.__elementContentTextSpan,this.__textFontSize,this.__textFontSizeUnit)}setTextFontFamily(valueNew){let convertedValue=TcHmi.ValueConverter.toFontFamily(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontFamily")),convertedValue!==this.__textFontFamily&&(this.__textFontFamily=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontFamily"}),this.__processTextFontFamily())}getTextFontFamily(){return this.__textFontFamily}__processTextFontFamily(){TcHmi.StyleProvider.processFontFamily(this.__elementContentTextSpan,this.__textFontFamily)}setTextFontStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toFontStyle(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontStyle")),convertedValue!==this.__textFontStyle&&(this.__textFontStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontStyle"}),this.__processTextFontStyle())}getTextFontStyle(){return this.__textFontStyle}__processTextFontStyle(){TcHmi.StyleProvider.processFontStyle(this.__elementContentTextSpan,this.__textFontStyle)}setTextFontWeight(valueNew){let convertedValue=TcHmi.ValueConverter.toFontWeight(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontWeight")),convertedValue!==this.__textFontWeight&&(this.__textFontWeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontWeight"}),this.__processTextFontWeight())}getTextFontWeight(){return this.__textFontWeight}__processTextFontWeight(){TcHmi.StyleProvider.processFontWeight(this.__elementContentTextSpan,this.__textFontWeight)}setWordWrap(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("WordWrap")),convertedValue!==this.__wordWrap&&(this.__wordWrap=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WordWrap"}),this.__processWordWrap())}getWordWrap(){return this.__wordWrap}__processWordWrap(){this.__wordWrap?(this.__elementContentTextSpan[0].style.whiteSpace="pre-wrap",this.__elementContentTextSpan[0].style.wordWrap="break-word",this.__elementContentTextSpan[0].style.overflowWrap="break-word"):(this.__elementContentTextSpan[0].style.whiteSpace="",this.__elementContentTextSpan[0].style.wordWrap="",this.__elementContentTextSpan[0].style.overflowWrap="")}__onStateSymbolWatch(){return data=>{data.error===TcHmi.Errors.NONE?!1!==data.value&&!0!==data.value||this.__processState(data.value,!1,this.__stateSymbol.getExpression().toString()):data.details&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiButton, Id="+this.getId()+", Property=StateSymbol, "+(this.__stateSymbol?"Symbol = "+this.__stateSymbol.getExpression().toString():"")+"] "+TcHmi.Log.buildMessage(data.details))}}setStateSymbol(valueNew){let newSymbol=valueNew;if(null===newSymbol){let symbolExpression=this.getAttributeDefaultValueInternal("StateSymbol");symbolExpression&&(newSymbol=new TcHmi.Symbol(symbolExpression))}this.__stateSymbol!==newSymbol&&(this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),newSymbol instanceof TcHmi.Symbol?(this.__stateSymbol=newSymbol,this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())):void 0===this.__stateSymbol?this.__stateSymbol=null:(this.__stateSymbol=null,this.__processState(!1,!1,"attribute")),TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StateSymbol"}))}getStateSymbol(){return this.__stateSymbol}}Beckhoff.TcHmiButton=TcHmiButton}(Beckhoff=Controls.Beckhoff||(Controls.Beckhoff={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiButton","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiButton);