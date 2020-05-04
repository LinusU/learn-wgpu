(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{234:function(t,e,a){t.exports=a.p+"assets/img/normal_mapping_correct.2731b486.png"},256:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"news-updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#news-updated"}},[t._v("#")]),t._v(" News "),s("strong",[t._v("UPDATED!")])]),t._v(" "),s("h2",{attrs:{id:"normal-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normal-mapping"}},[t._v("#")]),t._v(" Normal mapping")]),t._v(" "),s("p",[t._v('My perfectionism got in my way a bit with this one. I wasn\'t sure that what I was getting was "physically accurate", but it seems to look good.')]),t._v(" "),s("p",[s("img",{attrs:{src:a(234),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_0-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-5"}},[t._v("#")]),t._v(" 0.5!")]),t._v(" "),s("p",[t._v("To many things changed to make note of them here. Check out "),s("a",{attrs:{href:"https://github.com/sotrh/learn-wgpu/pull/29",target:"_blank",rel:"noopener noreferrer"}},[t._v("the 0.5 pull request"),s("OutboundLink")],1),t._v(" if you're curious about specifics. That being said, 2 things are worth mentioning directly: the y-axis now points up like with DirectX and Metal, and requesting an adapter and creating a device now use "),s("code",[t._v("Future")]),t._v("s. The tutorials have been updated as well as the code.")]),t._v(" "),s("h2",{attrs:{id:"reworked-lighting-tutorial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reworked-lighting-tutorial"}},[t._v("#")]),t._v(" Reworked lighting tutorial")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/intermediate/tutorial10-lighting/"}},[t._v("lighting tutorial")]),t._v(" was not up to par, so I redid it.")],1),t._v(" "),s("h2",{attrs:{id:"added-gif-showcase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#added-gif-showcase"}},[t._v("#")]),t._v(" Added GIF showcase")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/showcase/gifs/"}},[t._v("Creating GIFs")])],1),t._v(" "),s("h2",{attrs:{id:"updated-texture-tutorials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated-texture-tutorials"}},[t._v("#")]),t._v(" Updated texture tutorials")]),t._v(" "),s("p",[t._v("Up to this point, we created textures manually everytime. I've pulled out the texture creation code into a new "),s("code",[t._v("texture.rs")]),t._v(" file and included it every tutorial from the "),s("RouterLink",{attrs:{to:"/beginner/tutorial5-textures/#cleaning-things-up"}},[t._v("textures tutorial")]),t._v(" onward.")],1),t._v(" "),s("h2",{attrs:{id:"fixed-panics-do-to-not-specifying-the-correct-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-panics-do-to-not-specifying-the-correct-usage"}},[t._v("#")]),t._v(" Fixed panics do to not specifying the correct "),s("code",[t._v("usage")])]),t._v(" "),s("p",[t._v("Wgpu has become more strict about what "),s("code",[t._v("BufferUsage")]),t._v("s and "),s("code",[t._v("TextureUsage")]),t._v("s are required when performing certain operations. For example int the "),s("RouterLink",{attrs:{to:"/intermediate/windowless/"}},[t._v("Wgpu without a window example")]),t._v(", the "),s("code",[t._v("texture_desc")]),t._v(" only specified the usage to by "),s("code",[t._v("COPY_SRC")]),t._v(". This caused a crash when the "),s("code",[t._v("texture")]),t._v(" was used as a render target. Adding "),s("code",[t._v("OUTPUT_ATTACHMENT")]),t._v(" fixed the issue.")],1),t._v(" "),s("h2",{attrs:{id:"updating-winit-from-0-20-0-alpha5-to-0-20"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-winit-from-0-20-0-alpha5-to-0-20"}},[t._v("#")]),t._v(" Updating Winit from 0.20.0-alpha5 to 0.20")]),t._v(" "),s("p",[t._v("There were a lot of small changes to how the dpi stuff works. You can see all the changes "),s("a",{attrs:{href:"https://github.com/rust-windowing/winit/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("in the changelog"),s("OutboundLink")],1),t._v(". That means that some of the tutorials had to change.")]),t._v(" "),s("ul",[s("li",[t._v("I've removed "),s("code",[t._v("hidpi_factor")]),t._v(" from "),s("code",[t._v("State")]),t._v(" entirely. They removed the "),s("code",[t._v("hidpi_factor()")]),t._v(" method from "),s("code",[t._v("winit::window::Window")]),t._v(", and changed "),s("code",[t._v("inner_size()")]),t._v(" to return "),s("code",[t._v("PhysicalSize")]),t._v(" instead of "),s("code",[t._v("LogicalSize")]),t._v(", so we don't need to store the "),s("code",[t._v("hidpi_factor")]),t._v(" anymore.")]),t._v(" "),s("li",[s("code",[t._v("update_hidpi_and_resize")]),t._v(" is no more. Since "),s("code",[t._v("ScaleFactorChanged")]),t._v(" passes in the windows new "),s("code",[t._v("PhysicalSize")]),t._v(", we can simply use "),s("code",[t._v("resize()")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("State::size")]),t._v(" is now "),s("code",[t._v("PhysicalSize<u32>")]),t._v(" instead of the pre 0.20 "),s("code",[t._v("LogicalSize")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("EventsCleared")]),t._v(" is now "),s("code",[t._v("MainEventsCleared")]),t._v(".")])]),t._v(" "),s("p",[t._v("I may have missed a change, but I made sure that all the examples compile an run, so if you have trouble with your code you can use them as a reference.")]),t._v(" "),s("h2",{attrs:{id:"changed-tutorial-examples-to-use-a-src-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changed-tutorial-examples-to-use-a-src-directory"}},[t._v("#")]),t._v(" Changed tutorial examples to use a src directory")]),t._v(" "),s("p",[t._v("I wasn't using the traditional cargo binary folder setup. I've changed it to the standardized form now.")]),t._v(" "),s("h2",{attrs:{id:"updating-to-0-4-from-0-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-to-0-4-from-0-3"}},[t._v("#")]),t._v(" Updating to 0.4 from 0.3")]),t._v(" "),s("p",[t._v("There are a few things that have changed:")]),t._v(" "),s("ol",[s("li",[t._v("The use of "),s("code",[t._v("Instance")]),t._v(" has been removed. Creating a "),s("code",[t._v("Surface")]),t._v(" and requesting an "),s("code",[t._v("Adapter")]),t._v(" are done as follows.")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" surface "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" adapter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Adapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("RequestAdapterOptions "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("Default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// needs to be unwrapped")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("The "),s("code",[t._v("request_device")]),t._v(" method now returns a "),s("code",[t._v("(Device, Queue)")]),t._v(" tuple. This means that you can borrow the "),s("code",[t._v("Queue")]),t._v(" mutably while using the "),s("code",[t._v("Device")]),t._v(" immutably. Because of this change, submitting "),s("code",[t._v("CommandBuffer")]),t._v("s to the queue uses the "),s("code",[t._v("submit")]),t._v(" method on the "),s("code",[t._v("Queue")]),t._v(" directly.")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    encoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("finish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("The "),s("code",[t._v("create")]),t._v(" method on "),s("code",[t._v("Surface")]),t._v(" takes in any struct that implements the "),s("code",[t._v("HasRawWindow")]),t._v(" trait, instead of a "),s("code",[t._v("RawWindowHandle")]),t._v(". This means that the "),s("code",[t._v('raw-window-handle = "0.3"')]),t._v(" line in "),s("code",[t._v("Cargo.toml")]),t._v(" is no longer needed.")])]),t._v(" "),s("p",[t._v("I don't know if this is a change from 0.4, but you use "),s("code",[t._v('wgpu = "0.4"')]),t._v(" line in dependencies instead of the "),s("code",[t._v("[dependencies.wgpu]")]),t._v(" as wgpu will determine the best back end for you.")]),t._v(" "),s("h2",{attrs:{id:"new-recent-articles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-recent-articles"}},[t._v("#")]),t._v(" New/Recent Articles")]),t._v(" "),s("RecentArticles")],1)}),[],!1,null,null,null);e.default=n.exports}}]);