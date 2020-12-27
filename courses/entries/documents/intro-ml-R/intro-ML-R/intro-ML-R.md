---
title: "Introduction to machine learning with R"
author: "Dereck de Mézquita"
date: "27 December, 2020"
knit: (function(inputFile, encoding) { 
      rmarkdown::render(inputFile,
                        encoding=encoding, 
                        output_file=file.path(dirname(inputFile), "./intro-ML-R", "intro-ML-R.html")) })
output:
  html_document: 
    fig_caption: yes
    keep_md: yes
    number_sections: yes
    toc: yes
    # code_folding: hide
params:
  rmd: intro-ML-R.Rmd
editor_options: 
  chunk_output_type: console
always_allow_html: yes
---

<style>
	.download-button {
		background: DodgerBlue;
		border: none;
		color: white;
		padding: 8px 12px;
		cursor: pointer;
		border-radius: 10px;
		float: right;
	}
	.download-button > a {
		color: white;
	}
</style>

<button class="download-button">
	<a download="intro-ML-R.Rmd" href="data:text/rmd;base64,LS0tCnRpdGxlOiAiSW50cm9kdWN0aW9uIHRvIG1hY2hpbmUgbGVhcm5pbmcgd2l0aCBSIgphdXRob3I6ICJEZXJlY2sgZGUgTcOpenF1aXRhIgpkYXRlOiAiYHIgZm9ybWF0KFN5cy50aW1lKCksICclZCAlQiwgJVknKWAiCmtuaXQ6IChmdW5jdGlvbihpbnB1dEZpbGUsIGVuY29kaW5nKSB7IAogICAgICBybWFya2Rvd246OnJlbmRlcihpbnB1dEZpbGUsCiAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kaW5nPWVuY29kaW5nLCAKICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2ZpbGU9ZmlsZS5wYXRoKGRpcm5hbWUoaW5wdXRGaWxlKSwgIi4vaW50cm8tTUwtUiIsICJpbnRyby1NTC1SLmh0bWwiKSkgfSkKb3V0cHV0OgogIGh0bWxfZG9jdW1lbnQ6IAogICAgZmlnX2NhcHRpb246IHllcwogICAga2VlcF9tZDogeWVzCiAgICBudW1iZXJfc2VjdGlvbnM6IHllcwogICAgdG9jOiB5ZXMKICAgICMgY29kZV9mb2xkaW5nOiBoaWRlCnBhcmFtczoKICBybWQ6IGludHJvLU1MLVIuUm1kCmVkaXRvcl9vcHRpb25zOiAKICBjaHVua19vdXRwdXRfdHlwZTogY29uc29sZQphbHdheXNfYWxsb3dfaHRtbDogeWVzCi0tLQoKPHN0eWxlPgoJLmRvd25sb2FkLWJ1dHRvbiB7CgkJYmFja2dyb3VuZDogRG9kZ2VyQmx1ZTsKCQlib3JkZXI6IG5vbmU7CgkJY29sb3I6IHdoaXRlOwoJCXBhZGRpbmc6IDhweCAxMnB4OwoJCWN1cnNvcjogcG9pbnRlcjsKCQlib3JkZXItcmFkaXVzOiAxMHB4OwoJCWZsb2F0OiByaWdodDsKCX0KCS5kb3dubG9hZC1idXR0b24gPiBhIHsKCQljb2xvcjogd2hpdGU7Cgl9Cjwvc3R5bGU+Cgo8YnV0dG9uIGNsYXNzPSJkb3dubG9hZC1idXR0b24iPgoJPGEgZG93bmxvYWQ9ImludHJvLU1MLVIuUm1kIiBocmVmPSJgciBiYXNlNjRlbmM6OmRhdGFVUkkoZmlsZSA9IHBhcmFtcyRybWQsIG1pbWUgPSAndGV4dC9ybWQnLCBlbmNvZGluZyA9ICdiYXNlNjQnKWAiPkRvd25sb2FkIC5SbWQgc291cmNlIGZpbGU8L2E+CjwvYnV0dG9uPgoKYGBge3Igc2V0dXAsIGluY2x1ZGU9RkFMU0V9CmtuaXRyOjpvcHRzX2NodW5rJHNldChlY2hvPVRSVUUsIGZpZy53aWR0aD03LCBmaWcuaGVpZ2h0PTcsIGZpZy5hbGlnbj0iY2VudGVyIikKYGBgCgojIEludHJvZHVjdGlvbiB0byBtYWNoaW5lIGxlYXJuaW5nIHdpdGggUgoKVGhpcyBpcyBhbiAuUkhUTUwgZG9jdW1lbnQgYXNzb2NpYXRlZCB0byB0aGUgYEludHJvIHRvIG1hY2hpbmUgbGVhcm5pbmcgd2l0aCBSYCBjb3Vyc2Ugb24gZGVyZWNrc25vdGVzLmNvbS4gVGhpcyBpcyB1c2VkIHRvIHByb2R1Y2UgcGxvdHMgYW5kIG90aGVyIHJlc3VsdHMgZm9yIHRoZSBjb3Vyc2UuIEl0IHdpbGwgYmUgaW50ZWdyYXRlZCBpbnRvIHRoZSBIVE1MIGZvciB0aGF0IGNvdXJzZS4KCiMjIFIgZG9jdW1lbnQgc2V0IHVwCgpUaGlzIGNvZGUgaXMgdXNlZCBmb3Iga25pdGluZyB0aGUgZG9jdW1lbnQgYW5kIHJlZnJlc2hpbmcgaXQgaW4gdGhlIHZpZXdlciB3aW5kb3cgb2YgUi1zdHVkaW8uCgpgYGB7ciBrbml0ciwgZXZhbD1GQUxTRX0KbGlicmFyeSgib2N0YXZpdXMiKQpsaWJyYXJ5KCJzZXJ2ciIpCmBgYAoKYGBge3IgZXZhbD1GQUxTRX0KZ2V0RmlsZVdkIDwtIGZ1bmN0aW9uKCkgewoJd2QgPC0gZGlybmFtZShyc3R1ZGlvYXBpOjpnZXRBY3RpdmVEb2N1bWVudENvbnRleHQoKSRwYXRoKQoJaWYobmNoYXIod2QpID09IDApIHsKCQltZXNzYWdlKCJUaGlzIGZ1bmN0aW9uIGNhbiBvbmx5IGJlIGV4ZWN1dGVkIGluIHRoZSBlZGl0b3IsIHBsZWFzZSBydW4gZnJvbSBmaWxlIGNvbnRleHQuIikKCX0gZWxzZSBpZihuY2hhcih3ZCkgPiAwKSB7CgkJbWVzc2FnZShnbHVlOjpnbHVlKCJHb3Qgd2QgYXM6IFwie2Rpcm5hbWUocnN0dWRpb2FwaTo6Z2V0QWN0aXZlRG9jdW1lbnRDb250ZXh0KCkkcGF0aCl9XCIiKSkKCX0KCXJldHVybih3ZCkKfQppc0RlZmluZWQgPC0gZnVuY3Rpb24odmFyKSB7Cgl2YXIgPC0gZGVwYXJzZShzdWJzdGl0dXRlKHZhcikpOwoJZW52IDwtIHBhcmVudC5mcmFtZSgpOwoJZXhpc3RzKHZhciwgZW52KTsKfQp3ZCA8LSBnZXRGaWxlV2QoKQoKc2VydnJLbml0Umh0bWwgPC0gZnVuY3Rpb24oc2F2ZSA9IFRSVUUsIGlucHV0ID0gImluZGV4LlJodG1sIiwgY2xlYXJfY2FjaGUgPSBUUlVFLCB3ZCA9ICIiLCBwb3J0ID0gIjY5NjkiKSB7CglpZihpbnB1dCAhPSAiaW5kZXguUmh0bWwiKSB7CgkJb3V0cHV0IDwtIHN0cnNwbGl0KGlucHV0LCBzcGxpdCA9ICIuIiwgZml4ZWQgPSBUUlVFKVtbMV1dWzFdOwoJCW91dHB1dCA8LSBnbHVlOjpnbHVlKCJ7b3V0cHV0fS5odG1sIik7Cgl9IGVsc2UgewoJCW91dHB1dCA8LSAiaW5kZXguaHRtbCI7Cgl9OwoJCglpZihzYXZlID09IFRSVUUpIHsKCQlyc3R1ZGlvYXBpOjpkb2N1bWVudFNhdmUoKTsKCX07CgkKCWlmKCFpc0RlZmluZWQod2QpKSB7CgkJd2QgPC0gZ2V0RmlsZVdkKCkKCX07CgkKCgkKCWRhZW1vbl9zdG9wIDwtIGZ1bmN0aW9uICh3aGljaCA9IGRhZW1vbl9saXN0KCkpIHsKCQlmb3IgKGQgaW4gd2hpY2gpIHsKCQkJaWYgKGxlbmd0aChzIDwtIHNlcnZyRW52JGRhZW1vbl9saXN0W1tkXV0pID09IDApCgkJCQluZXh0CgkJCXN0b3BTZXJ2ZXIocykKCQkJc2VydnJFbnYkZGFlbW9uX2xpc3RbW2RdXSA9IGxpc3QoKQoJCX0KCX0KCQoJdmlldyhkYWVtb25fbGlzdCgpKQoJZGFlbW9uX2xpc3QoKVtbXV0gPT0gMQoJaXNEZWZpbmVkKGRhZW1vbl9saXN0KCkpCgkKCWlmIChkYWVtb25fbGlzdCgpICE9IDApIHsKCQltZXNzYWdlKCJOaWJiYSIpCgl9CgkKCXNlcnZyOjpkYWVtb25fc3RvcCh3aGljaCA9IGRhZW1vbl9saXN0KCkpOyAjIEtpbGxzIGFsbCBjdXJyZW50bHkgb3BlbiBzZXJ2ZXJzCglsb2NhbGhvc3QgPC0gZ2x1ZTo6Z2x1ZSgiaHR0cDovL2xvY2FsaG9zdDp7cG9ydH0iKQoJc2VydnI6Omh0dHcoZGlyID0gd2QsICMgTGF1bmNoZXMgc2VydmVyIG9uOiBodHRwOi8vbG9jYWxob3N0OjY5NjkgZGVmYXVsdAoJCQkJd2F0Y2ggPSB3ZCwKCQkJCXBhdHRlcm4gPSBvdXRwdXQsCgkJCQlhbGxfZmlsZXMgPSBUUlVFLAoJCQkJcG9ydCA9IHBvcnQpOwoJCglyc3R1ZGlvYXBpOjp2aWV3ZXIoZ2x1ZTo6Z2x1ZSgie2xvY2FsaG9zdH0ve291dHB1dH0iKSk7CgoJIyBtZXNzYWdlKGdsdWU6OmdsdWUoIkZpbGUgZXhwb3J0ZWQgdG86IHtvdXRwdXR9LFxuIFNlcnZlciBsYXVuY2hlZCBvbjoge2xvY2FsaG9zdH1cbiBDdXJyZW50IHdkIHNldCB0bzoge3dkfS4iKSkKCQoJa25pdHI6OmNsZWFuX2NhY2hlKGNsZWFuID0gY2xlYXJfY2FjaGUpOyAjIFdpbGwgY2xlYXIgY2FjaGUgYnkgZGVmYXVsdAoJa25pdHI6OmtuaXQoCgkJaW5wdXQgPSBpbnB1dCwKCQlvdXRwdXQgPSBvdXRwdXQsCgkJdGFuZ2xlID0gRkFMU0UsCgkJdGV4dCA9IE5VTEwsCgkJcXVpZXQgPSBUUlVFLAoJCWVudmlyID0gcGFyZW50LmZyYW1lKCksCgkJZW5jb2RpbmcgPSAiVVRGLTgiKTsKfQpgYGAKCkhlcmUgc2V0IHRoZSB2YXJpYWJsZXMgYXMgZGVzY3JpYmVkOyB0aGVzZSB3aWxsIGRldGVybWluZSBob3cgYW5kIHdoYXQgdGhlIHByb2dyYW1tZSBleGVjdXRlcy4KCmBgYHtyIG91dHB1dC1wYXJhbXMsIGluY2x1ZGUgPSBGQUxTRSwgZWNobyA9IEZBTFNFfQpwYXIobWZyb3cgPSBjKDEsIDEpKTsgIyBSZXNldGluZyBtYXJnaW5zIG9uIHBsb3RzCgprbml0cjo6b3B0c19jaHVuayRzZXQoZWNobyA9IFRSVUUsIHJlc3VsdHMgPSAiaGlkZSIsIG1lc3NhZ2UgPSBGQUxTRSwgd2FybmluZyA9IEZBTFNFLCBmaWcud2lkdGggPSA3LCBmaWcuaGVpZ2h0ID0gNywgZmlnLmFsaWduID0gImNlbnRlciIpOwpgYGAKCkluIHRoaXMgY291cnNlIHdlIHdpbGwgY292ZXIgbWFjaGluZSBsZWFybmluZywgbWFjaGluZSBsZWFybmluZyB0aGVvcnksIGFuZCBleGVjdXRpbmcgaXQgd2l0aCBSLiBTdWdnZXN0ZWQgcmVhZGluZyBtYXRlcmlhbCBpcyA8YSB0YXJnZXQ9Il9ibGFuayIgaHJlZj0iaHR0cDovL3d3dy1iY2YudXNjLmVkdS9+Z2FyZXRoL0lTTC9JU0xSJTIwU2l4dGglMjBQcmludGluZy5wZGYiPkdhcmV0aCBKYW1lczogQW4gSW50cm9kdWN0aW9uIHRvIFN0YXRpc3RpY2FsIExlYXJuaW5nPC9hPi4KCiMjIFdoYXQgaXMgbWFjaGluZSBsZWFybmluZwoKU2ltcGx5IHB1dCwgaXQncyBhIHNldCBvZiBzdGF0aXN0aWNhbCBtZXRob2RzIGFuZCBkYXRhIGFuYWx5c2lzIHRoYXQgYXV0b21hdGVzIGFuYWx5dGljYWwgbW9kZWwgYnVpbGRpbmcuIEl0IHVzZXMgYSBzZXQgb2YgYWxnb3JpdGhtcyB0byBpdGVyYXRpdmVseSAibGVhcm4iLCBmcm9tIGRhdGE7IG9yIGZpdCBhIG1vZGVsIHRvIGEgZGF0YSBzZXQuIE1hY2hpbmUgbGVhcm5pbmcgd2lsbCBhbGxvdyB5b3UgdG8gdXNlIGNvbXB1dGVycyB0byBkaXNjb3ZlciBpbnNpZ2h0cyB3aXRob3V0IGhhdmUgdG8gY29kZSBhIHByb2dyYW1tZSBvciBtb2RlbCB5b3Vyc2VsZi4KCiMjIEFwcGxpY2F0aW9ucyBvZiBtYWNoaW5lIGxlYXJuaW5nCgpNYWNoaW5lIGxlYXJuaW5nIGhhcyBhcHBsaWNhdGlvbnMgaW4gbWFueSBwbGFjZXM7IGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG86Cgo8dGFibGU+CiAgICA8dHI+CiAgICAgICAgPHRkPkZyYXVkIGRldGVjdGlvbjwvdGQ+CiAgICAgICAgPHRkPlNlYXJjaCByZXN1bHRzPC90ZD4KICAgIDwvdHI+CiAgICA8dHI+CiAgICAgICAgPHRkPlRhcmdldGVkIGFkdmVydGlzaW5nPC90ZD4KICAgICAgICA8dGQ+UHJpY2luZyBtb2RlbHM8L3RkPgogICAgPC90cj4KICAgIDx0cj4KICAgICAgICA8dGQ+UGF0dGVybiBhbmQgaW1hZ2UgcmVjb2duaXRpb248L3RkPgogICAgICAgIDx0ZD5GaW5hbmNpYWwgbW9kZWxsaW5nPC90ZD4KICAgIDwvdHI+CiAgICA8dHI+CiAgICAgICAgPHRkPkJpb2xvZ2ljYWwgZGF0YSBtb2RlbGxpbmc8L3RkPgogICAgICAgIDx0ZD5HUk4gKGdlbmUgcmVndWxhdG9yeSBuZXR3b3JrKSBpbmZlcmVuY2luZzwvdGQ+CiAgICA8L3RyPgo8L3RhYmxlPgoKIyMgVHlwZXMgb2YgbGVhcm5pbmcKCiMjIyBTdXBlcnZpc2VkIGxlYXJuaW5nCgpUcmFpbmVkIHVzaW5nIGxhYmVsbGVkIGV4YW1wbGVzLiBIZXJlIHdlIGtub3cgdGhlIG91dHB1dCBvZiBhIGdpdmVuIGlucHV0LiBUaGUgYWxnb3JpdGhtIHJlY2VpdmVzIGlucHV0cyBhbG9uZyB3aXRoIHRoZSBjb3JyZWN0IG91dHB1dHMuIFRoZSBtb2RlbCBpcyB0cmFpbmVkIGJ5IGNvbXBhcmluZyB0aGUgb3V0cHV0IHdpdGggdGhlIGNvcnJlY3Qgb3V0cHV0cy4KClBvc3NpYmxlIG1ldGhvZHMgdXNlZCBpbiBzdXBlcnZpc2VkIGxlYXJuaW5nIGFyZSwgY2xhc3NpZmljYXRpb24sIHJlZ3Jlc3Npb24sIHByZWRpY3Rpb24sIGFuZCBncmFkaWVudCBib29zdGluZy4gUGF0dGVybnMgYXJlIGlkZW50aWZpZWQgYW5kIHVzZWQgdG8gcHJlZGljdCBsYWJlbHMgb24gdW5sYWJlbGxlZCBkYXRhLiAKClRoaXMgbWV0aG9kIGlzIGNvbW1vbmx5IHVzZWQgaW4gcGxhY2VzIHdoZXJlIGhpc3RvcmljYWwgZGF0YSBpcyBhIGtub3duIHByZWRpY3RvciBvZiBmdXR1cmUgZXZlbnRzLiBGb3IgZXhhbXBsZSBwcmVkaWN0aW5nIHByaWNlIG9mIGFuIGFzc2V0IGJhc2VkIG9uIGhpc3RvcmljYWwgZGF0YS4KCiMjIyBVbnN1cGVydmlzZWQgbGVhcm5pbmcKClRoZXJlIGFyZSBubyBsYWJlbHMgb3IgaGlzdG9yaWNhbCBsYWJlbHMuIFRoZSBhbGdvcml0aG1zIGhhdmUgbm8gaW5wdXQgb24gdGhlIGNvcnJlY3QgYW5zd2VyLiBUaGUgYWxnb3JpdGhtcyBpbmZlciBwYXR0ZXJucyBmcm9tIHRoZSBkYXRhIHNldHMgZ2l2ZW47IHdpdGhpbiB0aGUgZGF0YSBzZXRzIHRoZW1zZWx2ZXMgdGhhdCBpcy4KCkhlcmUgd2UgZG8gbm90IG5lZWQgbGFiZWxsZWQgZGF0YS4gVGhpcyBjYW4gYWxzbyBmaW5kIGF0dHJpYnV0ZXMgb3IgY2hhcmFjdGVyaXN0aWNzIHRoYXQgc2VwYXJhdGUgc2VnbWVudHMgb3IgZ3JvdXBzIHdpdGhpbiB0aGUgZGF0YSBmcm9tIG9uZSBhbm90aGVyOyBjbHVzdGVyaW5nLgoKQ29tbW9uIG1ldGhvZHMgaGVyZSBhcmUgc2VsZiBvcmdhbmlzaW5nIG1hcHMsIG5lYXJlc3QgbmVpZ2hib3VyIG1hcHBpbmcsIGstbWVhbnMgY2x1c3RlcmluZywgYW5kIHNpbmd1bGFyIHZhbHVlIGRlY29tcG9zaXRpb24uCgojIyMgUmVpbmZvcmNlbWVudCBsZWFybmluZwoKT2Z0ZW4gdXNlZCBpbiByb2JvdGljcywgZ2FtaW5nIGFuZCBuYXZpZ2F0aW9uLiBIZXJlIHRoZSBhbGdvcml0aG0gZGlzY292ZXJzIHRocm91Z2ggdHJpYWwgYW5kIGVycm9yIHdoYXQgaXMgbW9zdCBlZmZlY3RpdmUuIFRoZXJlIGFyZSB0aHJlZSBtYWpvciBwYXJ0czoKCi0gVGhlIGFnZW50IChsZWFybmVyIG9yIGRlY2lzaW9uIG1ha2VyKS4KLSBUaGUgZW52aXJvbm1lbnQgKHRoaW5ncyB3aXRoIHdoaWNoIHRoZSBhZ2VudCB3aWxsIGludGVyYWN0KS4KLSBBY3Rpb25zICh0aGluZ3MgdGhlIGFnZW50IGNhbiBkbyBpbiB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQpLgoKVGhlIGdvYWwgaGVyZSBpcyBmb3IgdGhlIGFnZW50IHRvIGZpbmQgYWN0aW9ucyB3aGljaCBjYW4gbWF4aW1pc2UgYSBnaXZlbiByZXdhcmQuIEZvciBleGFtcGxlIHBvaW50cyBpbiBhIHZpZGVvIGdhbWUuIAoKIyMgTGluZWFyIHJlZ3Jlc3Npb24KCldlIGNvdmVyIHRoZSBoaXN0b3J5LCBiYXNpYyBjb25jZXB0LCBhbmQgYnVpbGRpbmcgbGluZWFyIHJlZ3Jlc3Npb24gbW9kZWxzIGluIFIuCgojIyMgSGlzdG9yeQoKRnJhbmNpcyBHYWx0b24gaW4gdGhlIDE4MDBzIHdhcyBzdHVkeWluZyB0aGUgcmVsYXRpb24gYmV0d2VlbiB0aGUgaGVpZ2h0IG9mIHBhcmVudHMgYW5kIHRoZWlyIGNoaWxkcmVuLiBIZSBmb3VuZCB0aGF0IHRoZSBzb25zIHRlbmRlZCB0byBiZSBhcyB0YWxsIGFzIHRoZWlyIGZhdGhlcidzOyBob3dldmVyIHRoZSBoZWlnaHQgb2YgdGhlIHNvbnMgYWxzbyB0ZW5kZWQgdG8gYmUgY2xvc2VyIHRvIHRoZSBhdmVyYWdlIG9mIHRoZSBzdXJyb3VuZGluZyBwb3B1bGF0aW9uLiAKClRoaXMgbWVhbnMgdGhhdCB0aGUgaGVpZ2h0IG9mIGEgc29uIHdpbGwgdGVuZCB0b3dhcmRzIHRoZSBoZWlnaHQgb2YgaGlzIGZhdGhlciwgYnV0IGFsc28gYmUgcHVsbGVkIHRvd2FyZHMgdGhlIGF2ZXJhZ2UgaGVpZ2h0LiBUaGlzIEdhbHRvbiBjYWxsZWQgcmVncmVzc2lvbjsgYSBmYXRoZXIncyBzb24ncyBoZWlnaHQgcmVncmVzc2VkIG9yIHRlbmRlZCB0b3dhcmRzIHRoZSBtZWFuLgoKIyMgTGluZWFyIHJlZ3Jlc3Npb24KCiMjIyBIaXN0b3J5CgpJbiB0aGlzIGV4YW1wbGUgd2UgdHJ5IHRvIGRyYXcgYSBsaW5lIGFzIGNsb3NlIHRvIHRoZSBldmVyeSBwb2ludHMgdGhhdCBtYXkgYXBwZWFyIG9uIGEgcGxvdC4gRm9yIGNsYXNzaWNhbCBsaW5lYXIgcmVncmVzc2lvciwgYWthICJsZWFzdCBzcXVhcmVzIG1ldGhvZCIsIHlvdSBvbmx5IG5lZWQgdG8gbWVhc3VyZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgcG9pbnRzIG9uIHRoZSBZIGF4aXMuCgpUaGlzIGlzIHNpbXBsZXN0IGV4YW1wbGUgcG9zc2libGUuIFRha2UgdGhlIGZvbGxvd2luZyBjb2RlIGNodW5rIGFuZCBwbG90IGV4YW1wbGUuCgojIyMjIEV4YW1wbGUgMTogbGluZWFyIHJlZ3Jlc3Npb24KCmBgYHtyIGxpbmVhclJlZ30KeCA8LSAxOjI7CnkgPC0gMToyOwoKbGluZWFyUmVnIDwtIGZ1bmN0aW9uKHhzLCB5cykgewogIGZpdCA8LSBsbSh5cyB+IHhzKSAjIEZpdHRpbmcgbGluZWFyIG1vZGVsCiAgYWJsaW5lKGZpdCwgY29sID0gInJlZCIpICMgQWRkcyBzdHJhaWdodCBsaW5lIHRvIHBsb3Q7ICh5IH4geCkKfTsKCnBsb3QoeCwgeSwKCSBtYWluID0gIkxpbmVhciByZWdyZXNzaW9uIGJldHdlZW4gdHdvIHBvaW50cyIsCgkgeGxpbSA9IGMoMC43NSwgMi4yNSksCgkgeWxpbSA9IGMoMC43NSwgMi4yNSkpOwpsaW5lYXJSZWcoeCwgeSk7CmBgYAoKIyMjIyBFeGFtcGxlIDI6IGxvd2VzcyByZWdyZXNzaW9uCgpJbiB0aGlzIGV4YW1wbGUgd2UgZG8gdGhlIHJlZ3Jlc3Npb24gdGVzdCB3aXRoIHRoZSBidWlsdCBpbiBkYXRhIHNldCBgaXJpc2AuIFRoaXMgdHJhY2tzIGZsb3dlcnMgcGV0YWwsIHNlcGFsLi4uIGV0Yy4gbW9ycGhvbG9neSBwZXIgc3BlY2llcy4KClRoaXMgbWluaW1pc2VzIHRoZSB2ZXJ0aWNhbCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBwb2ludHMgYW5kIHRoZSBsaW5lLiBIZXJlIHdlIHRha2UgdGhlIGxvd2VzcyByZWdyZXNzaW9uIHRvIGdldCBhIGJlc3QgZml0IGxpbmUgdG8gYWxsIHBvaW50cy4KCmBgYHtyIGxvd2Vzcy1yZWdyZXNzaW9ufQpsb3dlc3NSZWcgPC0gZnVuY3Rpb24oeHMsIHlzKSB7CglmaXQgPC0gbG93ZXNzKHhzLCB5cyk7CglsaW5lcyhmaXQsIGNvbCA9ICJibHVlIik7ICMgbG93ZXNzIGxpbmUgKHgseSkKfTsKCnBsb3QoaXJpcyRTZXBhbC5MZW5ndGgsCgkgaXJpcyRQZXRhbC5MZW5ndGgsCgkgbWFpbiA9ICJTZXBhbCB2cyBwZXRhbCAobGVuZ3RoKSIpOwoKbG93ZXNzUmVnKGlyaXMkU2VwYWwuTGVuZ3RoLCBpcmlzJFBldGFsLkxlbmd0aCk7CmBgYAoKRm9ybXVsYXMgZm9yIGJ1aWxkaW5nIGxpbmVhciByZWdyZXNzaW9uIG1vZGVscyBpbiBSIGFyZSBidWlsdCBpbiB0aGUgZm9sbG93aW5nIHdheTsgYCh5IH4geClgLiBJbiBvcmRlciB0byBhZGQgbW9yZSBwcmVkaWN0b3IgdmFyaWFibGVzIHRvIGJlIHRha2VuIGludG8gYWNjb3VudCB1c2UgdGhlIGArYCBzaWduIGluIHRoZSBmb3JtdWxhIGAoeSB+IHggKyB6KWAuCgpMZXQncyByZWRvIHRoZSBhYm92ZSBwbG90IHdpdGggYSBsaW5lYXIgcmVncmVzc2lvbiBtb2RlbCBhcyB3ZSBmaXJzdCBkaWQgYnV0IHRoaXMgdGltZSBhdHRyaWJ1dGluZyBtb3JlIHByZWRpY3RvciB2YXJpYWJsZXMuCgpgYGB7ciBtdWx0aS12YXItcmVncmVzc2lvbiwgcmVzdWx0cyA9ICJzaG93In0KcGxvdChpcmlzJFNlcGFsLkxlbmd0aCwKCSBpcmlzJFBldGFsLkxlbmd0aCArIGlyaXMkU2VwYWwuV2lkdGgsCgkgbWFpbiA9ICJTZXBhbCB2cyBwZXRhbCAobGVuZ3RoKSArIHNlcGFsIHdpZHRoIik7CgphYnJpdHJhcnlfbW9kZWwgPC0gbG0oaXJpcyRTZXBhbC5MZW5ndGggfiBpcmlzJFBldGFsLkxlbmd0aCArIGlyaXMkU2VwYWwuV2lkdGgsIGRhdGEgPSBpcmlzKTsKCnggPC0gc29ydChpcmlzJFNlcGFsLkxlbmd0aCk7CnkgPC0gYWJyaXRyYXJ5X21vZGVsJGZpdHRlZC52YWx1ZXNbb3JkZXIoaXJpcyRTZXBhbC5MZW5ndGgpXTsKCmxpbmVzKHgsIHksIGNvbCA9ICJwdXJwbGUiKTsKYGBgCgpMZXQncyBicmVhayBkb3duIHRoZSBmb3JtdWxhOiBgYWJyaXRyYXJ5X21vZGVsIDwtIGxtKGlyaXMkU2VwYWwuTGVuZ3RoIH4gaXJpcyRQZXRhbC5MZW5ndGggKyBpcmlzJFNlcGFsLldpZHRoLCBkYXRhID0gaXJpcyk7YAoKPHVsPgotIGBsbSgpYDogYSBmdW5jdGlvbiBmb3IgbGluZWFyIHJlZ3Jlc3Npb24uCi0gYGxvZyhTZXBhbC5MZW5ndGgsIGJhc2UgPSAxMCkgfiBQZXRhbC5MZW5ndGggKyBTZXBhbC5XaWR0aGA6IGZvcm11bGEgZm9yIG1vZGVsbGluZyB0YWtlbiBhcyBpbnB1dC4KLSBgbG9nKFNlcGFsLkxlbmd0aCwgYmFzZSA9IDEwKWA6IHRoZSBxdWFudGl0eSB3ZSB3YW50IHRvIHByZWRpY3QuCi0gYFBldGFsLkxlbmd0aCArIFNlcGFsLldpZHRoYDogdmFyaWFibGVzIGF2YWlsYWJsZSB0byBtYWtlIHByZWRpY3Rpb25zLgo8L3VsPgoKT25jZSB3ZSBoYXZlIGRlY2xhcmVkIGFsbCB0aG9zZSB2YXJpYWJsZXMgaW4gdGhlIGFyYml0cmFyeSBtb2RlbCB3ZSBjYW4gdGhlbiB1c2UgdGhlbSBmb3IgcHJlZGljdGlvbjoKCmBgYHtyIHByZWRpY3Rpb24tbW9kZWwsIHJlc3VsdHMgPSAic2hvdyJ9CmlyaXMkcHJlZExvZyA8LSBwcmVkaWN0KGFicml0cmFyeV9tb2RlbCwgbmV3ZGF0YSA9IGlyaXMkU3BlY2llcykKCmlyaXMkcHJlZExvZwpgYGAKClRoaXMgbW9kZWwgd2FzIGJ1aWx0IGJ5IHRoZSBwcmV2aW91cyBtdWx0aXZhcmlhYmxlIHJlZ3Jlc3Npb24gdGhhdCB3ZSBkaWQ7IG1hZGUgd2l0aCB0aGUgbmV3IGlucHV0IG9mIHRoZSBzcGVjaWVzLiBUaGVyZSBpcyBwb3NzaWJseSBhIHJlbGF0aW9uIGJldHdlZW4gYWxsIHRoZSB2YXJpYWJsZXMgdXNlZCB0byBjcmVhdGUgdGhlIG1vZGVsLCBhbmQgdGhlIHNwZWNpZXMuIE5vdyB3aXRoIHRoZSBtb2RlbCBwcmVkaWN0aW9uIG1pZ2h0IGJlIHBvc3NpYmxlLgoKIyMgUHJlZGljdCBzdHVkZW50cyBncmFkZXMKClVzZSB0aGUgZmlsZSBhcyBhIGRhdGEgc2V0OiA8YSB0YXJnZXQ9Il9ibGFuayIgaHJlZj0iL2NvdXJzZXMvZW50cmllcy9kb2N1bWVudHMvaW50cm8tbWwtUi9kYXRhL3N0dWRlbnQtbWF0LmNzdiIgZG93bmxvYWQ+c3R1ZGVudC1tYXQuY3N2PC9hPi4gVGhpcyBpcyBhIHNlbWljb2xvbiBzZXBhcmF0ZWQgZmlsZS4KCmBgYHtyIHN0dWRlbnRzLWRhdGEtbG9hZCwgcmVzdWx0cyA9ICJzaG93In0KZGF0YSA8LSByZWFkLmNzdigiZGF0YS9zdHVkZW50LW1hdC5jc3YiLCBzZXAgPSAiOyIpCgpoZWFkKGRhdGEpCmBgYAoKV2UncmUgZ29pbmcgdG8gdHJ5IGFuZCBwcmVkaWN0IGdyYWRlczsgaW4gdGhlIGZpbGUgd2Ugc2VlIEcxLTMsIHRoZXNlIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50IHBlcmlvZCBncmFkZXMsIDEtMyByZXNwZWN0aXZlbHkuCgpgYGB7ciBzdHVkZW50cy1kYXRhLXN1bW1hcnksIHJlc3VsdHMgPSAic2hvdyJ9CnN1bW1hcnkoZGF0YSkKYGBgCgpMZXQncyBjaGVjayBmb3IgTkEgdmFsdWVzIGFuZCBjbGVhbiB0aGUgZGF0YSBmcmFtZS4KCmBgYHtyIHN0dWRlbnRzLWRhdGEtY2xlYW4sIHJlc3VsdHMgPSAic2hvdyJ9CmFueShpcy5uYShkYXRhKSkgIyBDaGVja2luZyBmb3IgTkFzCnN0cihkYXRhKSAjIENoZWNraW5nIHRoZSBmYWN0b3JzIGFuZCBzdHJ1Y3R1cmUgb2YgZGF0YSBmcmFtZQpgYGAKCkRhdGEgc2V0IGlzIGEgdHJhaW5pbmcgZGF0YSBzZXQsIHRodXMgaXQgaXMgY2xlYW4uIFdlIGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgdG8gaXQuIExldCdzIHBsb3QgaXQgdG8gdmlzdWFsbHkgc2VlIGl0LgoKIyMjIFZpc3VhbGlzaW5nIHN0dWRlbnQgZGF0YQoKSGVyZSB3ZSB3aWxsIHBsb3Qgb25seSB0aGUgbnVtZXJpYyBjb2x1bW5zLiAKCmBgYHtyIHN0dWRlbnRzLWNvcnJlbGF0aW9ufQpudW1fY29scyA8LSBzYXBwbHkoZGF0YSwgaXMubnVtZXJpYyk7CiMgTm93IHdlIGZpbHRlciBmb3IgY29ycmVsYXRpb24gZGF0YQpjb3JfZGF0YSA8LSBjb3IoZGF0YVssbnVtX2NvbHNdKQpgYGAKCldoYXQgd2UncmUgc2VlaW5nIGluIHRoZSBgY29yX2RhdGFgIHZhcmlhYmxlIGlzIGEgc3RhdGlzdGljYWwgY29ycmVsYXRpb24gYmV0d2VlbiBhbGwgb2YgdGhlIGRpZmZlcmVudCB2YXJpYWJsZXMgZm91bmQgaW4gdGhlIGRhdGEgZnJhbWUuIFRodXMsIGl0IG1ha2VzIHNlbnNlIHRoYXQgYXQgd2UgZ2V0IGEgY29ycmVsYXRpb24gb2YgIjEiOiBgY29yX2RhdGFbImFnZSIsICJhZ2UiXTsgPSAxLjBgLiBOb3RlIHRoYXQgZGlhZ29uYWwgb2YgMXMgYWNjcm9zIHRoZSB0YWJsZSwgdGhpcyBpcyBiZWNhdXNlIGFsbCBvZiB0aGUgZmVhdHVyZXMgYXJlIGNvcnJlbGF0ZWQgd2l0aCB0aGVtc2VsdmVzLgoKYGBge3Igc3R1ZGVudHMtY29ycmVsYXRpb24tcHJpbnQtMSwgcmVzdWx0cyA9ICJzaG93In0KZGltKGNvcl9kYXRhKTsKaGVhZChjb3JfZGF0YSwgNSk7CmBgYAoKR3JlYXQgaW5mb3JtYXRpb24sIGJ1dCBsZXQncyB2aXN1YWxpc2UgdGhpcyBkYXRhLgoKYGBge3Igc3R1ZGVudHMtY29ycnBsb3QtMX0KbGlicmFyeSgiY29ycnBsb3QiKTsgIyBGb3IgcGxvdHRpbmcgY29ycmVsYXRpb24gZGlhZ3JhbXM7IG1vcmUgY29tbW9uIGFuZCBlYXN5Cgpjb3JycGxvdChjb3JfZGF0YSwgbWV0aG9kID0gImNvbG9yIikKYGBgCgpUaGVyZSBpcyBhIGhpZ2ggY29ycmVsYXRpb24gYmV0d2VlbiBHMS0zLCB0aGlzIG1ha2VzIHNlbnNlIGJlY2F1c2UgYSBnb29kIHN0dWRlbnQgc2hvdWxkIGNvbnRpbnVlIHRvIGdldCBnb29kIG1hcmtzLCBhbmQgaW52ZXJzZWx5LiBOb3RlIHRoYXQgbW90aGVyJ3MgYW5kIGZhdGhlcidzIGVkdWNhdGlvbiBsZXZlbHMgYXJlIHNsaWdodGx5IGNvcnJlbGF0ZWQuCgpMZXQncyBkbyB0aGUgc2FtZSB0aGluZyBidXQgd2l0aCAiY29ycmdyYW0iLiBJdCdzIGEgYml0IG1vcmUgY29tcGxpY2F0ZWQsIGJ1dCB0aGUgbWFpbiBkaWZmZXJlbmNlIGlzIHRoYXQgY29ycmdyYW0gY2FuIHRha2UgaW4gdGhlIGRhdGEgZnJhbWUgZGlyZWN0bHksIHdlIGRvbid0IGhhdmUgdG8gZmlsdGVyIG9yIGNsZWFuIGFueXRoaW5nLiBMZXQncyBkbyB0aGUgcmF3IGRhdGEgZnJhbWUuCgpgYGB7ciBzdHVkZW50cy1jb3JyZ3JhbS0xLCBlY2hvID0gRkFMU0V9CmxpYnJhcnkoImNvcnJncmFtIik7ICMgRm9yIG1wbG90dGluZyBjb3JyZWxhdGlvbiBkaWFncmFtcwoKY29ycmdyYW0oZGF0YSkKYGBgCgpXZSBjYW4gYWRkIGEgYnVuY2ggb2YgYWRkaXRpb25hbCBhcmd1bWVudHMgdG8gY29ycmdyYW0uCgpgYGB7ciBzdHVkZW50cy1jb3JyZ3JhbS0yfQpjb3JyZ3JhbSgKCWRhdGEsCglvcmRlciA9IFRSVUUsCglsb3dlci5wYW5lbCA9IHBhbmVsLnNoYWRlLAoJdXBwZXIucGFuZWwgPSBwYW5lbC5waWUsCgl0ZXh0LnBhbmVsID0gcGFuZWwudHh0LAoJZ2FwID0gMC4yNSkKYGBgCgpMb3dlciBwYW5lbCBhcmUgc2hhZGVkIGJveGVzLCBhbmQgdGhlIHVwcGVyIGFyZSBwaWUgY2hhcnRzIHNob3dpbmcgdGhlIGNvcnJlbGF0aW9uLiAKCk5vdyBsZXQncyBwbG90IHRoZSBHMyBzY29yZS4gVGhpcyBpcyBhbGwgZXhwbG9yYXRvcnkgaW4gb3JkZXIgdG8gc2VlIHdoYXQgdGhlIGRhdGEgbG9va3MgbGlrZSBiZWZvcmUgbW92aW5nIG9uIHRvIGFueXRoaW5nIGVsc2UuCgpgYGB7ciBzdHVkZW50cy1oaXN0LCByZXN1bHRzID0gInNob3cifQpoaXN0KGRhdGEkRzMsIG1haW4gPSAiUGVyaW9kIDMgc2NvcmVzIiwgeGxhYiA9ICJTdHVkZW50cyIpCnVuaXF1ZShkYXRhJEczKQpgYGAKIyMjIFNwbGl0dGluZzogdHJhaW5pbmcvdGVzdGluZyBkYXRhCgpOb3cgbGV0J3MgZG8gdGhlIGZvbGxvd2luZzoKCi0gU3BsaXQgdGhlIGRhdGEgaW50byBhIHRyYWluaW5nIHNldCBhbmQgdGVzdGluZyBzZXQuCi0gVHJhaW4gYSBsaW5lYXIgcmVncmVzc2lvbiBtb2RlbC4KLSBJbnRlcnByZXRpbmcgdGhlIHJlc3VsdHMgb2Ygb3VyIG1vZGVsLgoKYGBge3Igc3R1ZGVudHMtc3BsaXQtZGF0YX0KbGlicmFyeSgiY2FUb29scyIpCnNldC5zZWVkKDEwMSkKCnNhbXBsZSA8LSBzYW1wbGUuc3BsaXQoZGF0YSRHMywgU3BsaXRSYXRpbyA9IDAuNykgIyBTcGxpdHMgNzAlIHRvIHRyYWluaW5nCnRyYWluIDwtIHN1YnNldChkYXRhLCBzYW1wbGUgPT0gVFJVRSkKdGVzdCA8LSBzdWJzZXQoZGF0YSwgc2FtcGxlID09IEZBTFNFKQpgYGAKCldoYXQgd2UgZGlkIGhlcmUgaXM6IGNhbGwgImNhVG9vbHMiLCBzZXQgYSBzZWVkIHRvIHNwbGl0IGRhdGEgaW4gYSBwcmVkaWN0YWJsZSB3YXk7IGRvZXMgbm90IG5lZWQgdG8gYmUgc2V0IGZvciBhY3R1YWwgcnVuLCBnb3QgYW4gYXJyYXkgb2YgVFJVRS9GQUxTRSBpbiBvcmRlciB0byBzcGxpdCB0aGUgZGF0YSB3aXRoIGEgc2FtcGxlLnNwbGl0KCkgZnVuY3Rpb24gZnJvbSBjYVRvb2xzLCB0aGVuIGZpbHRlcmVkIG9yIHN1YnNldCBmcm9tIHRoZSBvcmlnaW5hbCBkYXRhIHZhcmlhYmxlIGludG8gYSB0cmFpbiB2YXJpYWJsZSwgYW5kIHRlc3QuCgoqKlRoZXNlIGxpbmVzIG9mIGNvZGUgZ2V0IG9mdGVuIHVzZWQsIHJlbWVtYmVyIHRoZW0qKi4KCiMjIyBUcmFpbmluZyBsaW5lYXIgcmVncmVzc2lvbiBtb2RlbAoKSGVyZSB3ZSB1c2UgdGhlIGxtKCkgZnVuY3Rpb24gZm9yIGEgbW9kZWwuIFRoaXMgaXMgYSBsaW5lYXIgbW9kZWwgZnVuY3Rpb24uIFBhc3NlZCBpbiBpcyBmaXJzdCB0aGUgZmVhdHVyZSB3ZSB3YW50IHRvIHByZWRpY3QsIHRoZW4gdGlsZGUgYW5kIGEgc3VtIG9mIHRoZSBmZWF0dXJlcyB3ZSB3YW50IHRvIHVzZSB0byBtYWtlIHRoYXQgcHJlZGljdGlvbnMuIE9yIHdlIGNhbiBwYXNzIGluIGFsbCBvZiB0aGUgZmVhdHVyZXMgKGNvbHVtbnMpIGZyb20gdGhlIGRhdGEgZnJhbWUgaW4gb3JkZXIgdG8gbWFrZSB0aGUgcHJlZGljdGlvbjsgYH4uYC4KCmBgYHtyIHN0dWRlbnRzLXRyYWluLW1vZGVsLCByZXN1bHRzID0gInNob3cifQptb2RlbCA8LSBsbShHMyB+LiAsIHRyYWluKQoKc3VtbWFyeShtb2RlbCkKYGBgCg==">Download .Rmd source file</a>
</button>



# Introduction to machine learning with R

This is an .RHTML document associated to the `Intro to machine learning with R` course on derecksnotes.com. This is used to produce plots and other results for the course. It will be integrated into the HTML for that course.

## R document set up

This code is used for kniting the document and refreshing it in the viewer window of R-studio.


```r
library("octavius")
library("servr")
```


```r
getFileWd <- function() {
	wd <- dirname(rstudioapi::getActiveDocumentContext()$path)
	if(nchar(wd) == 0) {
		message("This function can only be executed in the editor, please run from file context.")
	} else if(nchar(wd) > 0) {
		message(glue::glue("Got wd as: \"{dirname(rstudioapi::getActiveDocumentContext()$path)}\""))
	}
	return(wd)
}
isDefined <- function(var) {
	var <- deparse(substitute(var));
	env <- parent.frame();
	exists(var, env);
}
wd <- getFileWd()

servrKnitRhtml <- function(save = TRUE, input = "index.Rhtml", clear_cache = TRUE, wd = "", port = "6969") {
	if(input != "index.Rhtml") {
		output <- strsplit(input, split = ".", fixed = TRUE)[[1]][1];
		output <- glue::glue("{output}.html");
	} else {
		output <- "index.html";
	};
	
	if(save == TRUE) {
		rstudioapi::documentSave();
	};
	
	if(!isDefined(wd)) {
		wd <- getFileWd()
	};
	

	
	daemon_stop <- function (which = daemon_list()) {
		for (d in which) {
			if (length(s <- servrEnv$daemon_list[[d]]) == 0)
				next
			stopServer(s)
			servrEnv$daemon_list[[d]] = list()
		}
	}
	
	view(daemon_list())
	daemon_list()[[]] == 1
	isDefined(daemon_list())
	
	if (daemon_list() != 0) {
		message("Nibba")
	}
	
	servr::daemon_stop(which = daemon_list()); # Kills all currently open servers
	localhost <- glue::glue("http://localhost:{port}")
	servr::httw(dir = wd, # Launches server on: http://localhost:6969 default
				watch = wd,
				pattern = output,
				all_files = TRUE,
				port = port);
	
	rstudioapi::viewer(glue::glue("{localhost}/{output}"));

	# message(glue::glue("File exported to: {output},\n Server launched on: {localhost}\n Current wd set to: {wd}."))
	
	knitr::clean_cache(clean = clear_cache); # Will clear cache by default
	knitr::knit(
		input = input,
		output = output,
		tangle = FALSE,
		text = NULL,
		quiet = TRUE,
		envir = parent.frame(),
		encoding = "UTF-8");
}
```

Here set the variables as described; these will determine how and what the programme executes.



In this course we will cover machine learning, machine learning theory, and executing it with R. Suggested reading material is <a target="_blank" href="http://www-bcf.usc.edu/~gareth/ISL/ISLR%20Sixth%20Printing.pdf">Gareth James: An Introduction to Statistical Learning</a>.

## What is machine learning

Simply put, it's a set of statistical methods and data analysis that automates analytical model building. It uses a set of algorithms to iteratively "learn", from data; or fit a model to a data set. Machine learning will allow you to use computers to discover insights without have to code a programme or model yourself.

## Applications of machine learning

Machine learning has applications in many places; including but not limited to:

<table>
    <tr>
        <td>Fraud detection</td>
        <td>Search results</td>
    </tr>
    <tr>
        <td>Targeted advertising</td>
        <td>Pricing models</td>
    </tr>
    <tr>
        <td>Pattern and image recognition</td>
        <td>Financial modelling</td>
    </tr>
    <tr>
        <td>Biological data modelling</td>
        <td>GRN (gene regulatory network) inferencing</td>
    </tr>
</table>

## Types of learning

### Supervised learning

Trained using labelled examples. Here we know the output of a given input. The algorithm receives inputs along with the correct outputs. The model is trained by comparing the output with the correct outputs.

Possible methods used in supervised learning are, classification, regression, prediction, and gradient boosting. Patterns are identified and used to predict labels on unlabelled data. 

This method is commonly used in places where historical data is a known predictor of future events. For example predicting price of an asset based on historical data.

### Unsupervised learning

There are no labels or historical labels. The algorithms have no input on the correct answer. The algorithms infer patterns from the data sets given; within the data sets themselves that is.

Here we do not need labelled data. This can also find attributes or characteristics that separate segments or groups within the data from one another; clustering.

Common methods here are self organising maps, nearest neighbour mapping, k-means clustering, and singular value decomposition.

### Reinforcement learning

Often used in robotics, gaming and navigation. Here the algorithm discovers through trial and error what is most effective. There are three major parts:

- The agent (learner or decision maker).
- The environment (things with which the agent will interact).
- Actions (things the agent can do in the given environment).

The goal here is for the agent to find actions which can maximise a given reward. For example points in a video game. 

## Linear regression

We cover the history, basic concept, and building linear regression models in R.

### History

Francis Galton in the 1800s was studying the relation between the height of parents and their children. He found that the sons tended to be as tall as their father's; however the height of the sons also tended to be closer to the average of the surrounding population. 

This means that the height of a son will tend towards the height of his father, but also be pulled towards the average height. This Galton called regression; a father's son's height regressed or tended towards the mean.

## Linear regression

### History

In this example we try to draw a line as close to the every points that may appear on a plot. For classical linear regressior, aka "least squares method", you only need to measure the distance between the points on the Y axis.

This is simplest example possible. Take the following code chunk and plot example.

#### Example 1: linear regression


```r
x <- 1:2;
y <- 1:2;

linearReg <- function(xs, ys) {
  fit <- lm(ys ~ xs) # Fitting linear model
  abline(fit, col = "red") # Adds straight line to plot; (y ~ x)
};

plot(x, y,
	 main = "Linear regression between two points",
	 xlim = c(0.75, 2.25),
	 ylim = c(0.75, 2.25));
linearReg(x, y);
```

<img src="/Users/work/Coding/web-sites/derecksnotes/in-progress/entries/intro-ml-R/./intro-ML-R/intro-ML-R_files/figure-html/linearReg-1.png" style="display: block; margin: auto;" />

#### Example 2: lowess regression

In this example we do the regression test with the built in data set `iris`. This tracks flowers petal, sepal... etc. morphology per species.

This minimises the vertical distance between the points and the line. Here we take the lowess regression to get a best fit line to all points.


```r
lowessReg <- function(xs, ys) {
	fit <- lowess(xs, ys);
	lines(fit, col = "blue"); # lowess line (x,y)
};

plot(iris$Sepal.Length,
	 iris$Petal.Length,
	 main = "Sepal vs petal (length)");

lowessReg(iris$Sepal.Length, iris$Petal.Length);
```

<img src="/Users/work/Coding/web-sites/derecksnotes/in-progress/entries/intro-ml-R/./intro-ML-R/intro-ML-R_files/figure-html/lowess-regression-1.png" style="display: block; margin: auto;" />

Formulas for building linear regression models in R are built in the following way; `(y ~ x)`. In order to add more predictor variables to be taken into account use the `+` sign in the formula `(y ~ x + z)`.

Let's redo the above plot with a linear regression model as we first did but this time attributing more predictor variables.


```r
plot(iris$Sepal.Length,
	 iris$Petal.Length + iris$Sepal.Width,
	 main = "Sepal vs petal (length) + sepal width");

abritrary_model <- lm(iris$Sepal.Length ~ iris$Petal.Length + iris$Sepal.Width, data = iris);

x <- sort(iris$Sepal.Length);
y <- abritrary_model$fitted.values[order(iris$Sepal.Length)];

lines(x, y, col = "purple");
```

<img src="/Users/work/Coding/web-sites/derecksnotes/in-progress/entries/intro-ml-R/./intro-ML-R/intro-ML-R_files/figure-html/multi-var-regression-1.png" style="display: block; margin: auto;" />

Let's break down the formula: `abritrary_model <- lm(iris$Sepal.Length ~ iris$Petal.Length + iris$Sepal.Width, data = iris);`

<ul>
- `lm()`: a function for linear regression.
- `log(Sepal.Length, base = 10) ~ Petal.Length + Sepal.Width`: formula for modelling taken as input.
- `log(Sepal.Length, base = 10)`: the quantity we want to predict.
- `Petal.Length + Sepal.Width`: variables available to make predictions.
</ul>

Once we have declared all those variables in the arbitrary model we can then use them for prediction:


```r
iris$predLog <- predict(abritrary_model, newdata = iris$Species)

iris$predLog
```

```
##   [1] 4.994165 4.696402 4.768315 4.803147 5.053717 5.373951 4.934612 4.981804
##   [9] 4.636850 4.803147 5.160462 5.028996 4.696402 4.554826 5.197543 5.577329
##  [17] 5.185183 4.994165 5.314398 5.220014 5.076188 5.160462 4.864949 5.016636
##  [25] 5.170572 4.790786 5.028996 5.041357 4.934612 4.909891 4.850339 4.981804
##  [33] 5.398672 5.411032 4.803147 4.721123 4.946973 5.053717 4.649210 4.981804
##  [41] 4.946973 4.232343 4.768315 5.088549 5.408782 4.696402 5.267206 4.815507
##  [49] 5.160462 4.875060 6.372844 6.278460 6.407675 5.506527 6.087442 6.040250
##  [57] 6.432396 5.235736 6.146994 5.697545 5.091910 6.017779 5.446975 6.194186
##  [65] 5.675074 6.171715 6.159355 5.791929 5.682935 5.578440 6.420036 5.804290
##  [73] 6.050360 6.134634 6.005418 6.112163 6.181826 6.395315 6.099802 5.449225
##  [81] 5.471696 5.424504 5.697545 6.263849 6.159355 6.397564 6.313291 5.695295
##  [89] 5.970587 5.625632 5.873953 6.206547 5.685185 5.176183 5.839121 6.017779
##  [97] 5.958226 6.005418 5.153712 5.851482 7.045892 6.263849 6.820043 6.618914
## [105] 6.772851 7.150387 5.861592 6.949258 6.475088 7.271741 6.561612 6.358233
## [113] 6.631275 6.097552 6.323402 6.655996 6.631275 7.673998 7.053753 5.918895
## [121] 6.844764 6.229018 7.078474 6.169465 6.904316 6.986340 6.181826 6.348123
## [129] 6.559362 6.772851 6.795322 7.532422 6.559362 6.323402 6.440257 6.914427
## [137] 6.916677 6.690827 6.300931 6.643635 6.738019 6.502059 6.263849 6.939148
## [145] 6.904316 6.489699 6.097552 6.489699 6.822293 6.442507
```

This model was built by the previous multivariable regression that we did; made with the new input of the species. There is possibly a relation between all the variables used to create the model, and the species. Now with the model prediction might be possible.

## Predict students grades

Use the file as a data set: <a target="_blank" href="/courses/entries/documents/intro-ml-R/data/student-mat.csv" download>student-mat.csv</a>. This is a semicolon separated file.


```r
data <- read.csv("data/student-mat.csv", sep = ";")

head(data)
```

```
##   school sex age address famsize Pstatus Medu Fedu     Mjob     Fjob     reason
## 1     GP   F  18       U     GT3       A    4    4  at_home  teacher     course
## 2     GP   F  17       U     GT3       T    1    1  at_home    other     course
## 3     GP   F  15       U     LE3       T    1    1  at_home    other      other
## 4     GP   F  15       U     GT3       T    4    2   health services       home
## 5     GP   F  16       U     GT3       T    3    3    other    other       home
## 6     GP   M  16       U     LE3       T    4    3 services    other reputation
##   guardian traveltime studytime failures schoolsup famsup paid activities
## 1   mother          2         2        0       yes     no   no         no
## 2   father          1         2        0        no    yes   no         no
## 3   mother          1         2        3       yes     no  yes         no
## 4   mother          1         3        0        no    yes  yes        yes
## 5   father          1         2        0        no    yes  yes         no
## 6   mother          1         2        0        no    yes  yes        yes
##   nursery higher internet romantic famrel freetime goout Dalc Walc health
## 1     yes    yes       no       no      4        3     4    1    1      3
## 2      no    yes      yes       no      5        3     3    1    1      3
## 3     yes    yes      yes       no      4        3     2    2    3      3
## 4     yes    yes      yes      yes      3        2     2    1    1      5
## 5     yes    yes       no       no      4        3     2    1    2      5
## 6     yes    yes      yes       no      5        4     2    1    2      5
##   absences G1 G2 G3
## 1        6  5  6  6
## 2        4  5  5  6
## 3       10  7  8 10
## 4        2 15 14 15
## 5        4  6 10 10
## 6       10 15 15 15
```

We're going to try and predict grades; in the file we see G1-3, these correspond to different period grades, 1-3 respectively.


```r
summary(data)
```

```
##     school              sex                 age         address         
##  Length:395         Length:395         Min.   :15.0   Length:395        
##  Class :character   Class :character   1st Qu.:16.0   Class :character  
##  Mode  :character   Mode  :character   Median :17.0   Mode  :character  
##                                        Mean   :16.7                     
##                                        3rd Qu.:18.0                     
##                                        Max.   :22.0                     
##    famsize            Pstatus               Medu            Fedu      
##  Length:395         Length:395         Min.   :0.000   Min.   :0.000  
##  Class :character   Class :character   1st Qu.:2.000   1st Qu.:2.000  
##  Mode  :character   Mode  :character   Median :3.000   Median :2.000  
##                                        Mean   :2.749   Mean   :2.522  
##                                        3rd Qu.:4.000   3rd Qu.:3.000  
##                                        Max.   :4.000   Max.   :4.000  
##      Mjob               Fjob              reason            guardian        
##  Length:395         Length:395         Length:395         Length:395        
##  Class :character   Class :character   Class :character   Class :character  
##  Mode  :character   Mode  :character   Mode  :character   Mode  :character  
##                                                                             
##                                                                             
##                                                                             
##    traveltime      studytime        failures       schoolsup        
##  Min.   :1.000   Min.   :1.000   Min.   :0.0000   Length:395        
##  1st Qu.:1.000   1st Qu.:1.000   1st Qu.:0.0000   Class :character  
##  Median :1.000   Median :2.000   Median :0.0000   Mode  :character  
##  Mean   :1.448   Mean   :2.035   Mean   :0.3342                     
##  3rd Qu.:2.000   3rd Qu.:2.000   3rd Qu.:0.0000                     
##  Max.   :4.000   Max.   :4.000   Max.   :3.0000                     
##     famsup              paid            activities          nursery         
##  Length:395         Length:395         Length:395         Length:395        
##  Class :character   Class :character   Class :character   Class :character  
##  Mode  :character   Mode  :character   Mode  :character   Mode  :character  
##                                                                             
##                                                                             
##                                                                             
##     higher            internet           romantic             famrel     
##  Length:395         Length:395         Length:395         Min.   :1.000  
##  Class :character   Class :character   Class :character   1st Qu.:4.000  
##  Mode  :character   Mode  :character   Mode  :character   Median :4.000  
##                                                           Mean   :3.944  
##                                                           3rd Qu.:5.000  
##                                                           Max.   :5.000  
##     freetime         goout            Dalc            Walc      
##  Min.   :1.000   Min.   :1.000   Min.   :1.000   Min.   :1.000  
##  1st Qu.:3.000   1st Qu.:2.000   1st Qu.:1.000   1st Qu.:1.000  
##  Median :3.000   Median :3.000   Median :1.000   Median :2.000  
##  Mean   :3.235   Mean   :3.109   Mean   :1.481   Mean   :2.291  
##  3rd Qu.:4.000   3rd Qu.:4.000   3rd Qu.:2.000   3rd Qu.:3.000  
##  Max.   :5.000   Max.   :5.000   Max.   :5.000   Max.   :5.000  
##      health         absences            G1              G2       
##  Min.   :1.000   Min.   : 0.000   Min.   : 3.00   Min.   : 0.00  
##  1st Qu.:3.000   1st Qu.: 0.000   1st Qu.: 8.00   1st Qu.: 9.00  
##  Median :4.000   Median : 4.000   Median :11.00   Median :11.00  
##  Mean   :3.554   Mean   : 5.709   Mean   :10.91   Mean   :10.71  
##  3rd Qu.:5.000   3rd Qu.: 8.000   3rd Qu.:13.00   3rd Qu.:13.00  
##  Max.   :5.000   Max.   :75.000   Max.   :19.00   Max.   :19.00  
##        G3       
##  Min.   : 0.00  
##  1st Qu.: 8.00  
##  Median :11.00  
##  Mean   :10.42  
##  3rd Qu.:14.00  
##  Max.   :20.00
```

Let's check for NA values and clean the data frame.


```r
any(is.na(data)) # Checking for NAs
```

```
## [1] FALSE
```

```r
str(data) # Checking the factors and structure of data frame
```

```
## 'data.frame':	395 obs. of  33 variables:
##  $ school    : chr  "GP" "GP" "GP" "GP" ...
##  $ sex       : chr  "F" "F" "F" "F" ...
##  $ age       : int  18 17 15 15 16 16 16 17 15 15 ...
##  $ address   : chr  "U" "U" "U" "U" ...
##  $ famsize   : chr  "GT3" "GT3" "LE3" "GT3" ...
##  $ Pstatus   : chr  "A" "T" "T" "T" ...
##  $ Medu      : int  4 1 1 4 3 4 2 4 3 3 ...
##  $ Fedu      : int  4 1 1 2 3 3 2 4 2 4 ...
##  $ Mjob      : chr  "at_home" "at_home" "at_home" "health" ...
##  $ Fjob      : chr  "teacher" "other" "other" "services" ...
##  $ reason    : chr  "course" "course" "other" "home" ...
##  $ guardian  : chr  "mother" "father" "mother" "mother" ...
##  $ traveltime: int  2 1 1 1 1 1 1 2 1 1 ...
##  $ studytime : int  2 2 2 3 2 2 2 2 2 2 ...
##  $ failures  : int  0 0 3 0 0 0 0 0 0 0 ...
##  $ schoolsup : chr  "yes" "no" "yes" "no" ...
##  $ famsup    : chr  "no" "yes" "no" "yes" ...
##  $ paid      : chr  "no" "no" "yes" "yes" ...
##  $ activities: chr  "no" "no" "no" "yes" ...
##  $ nursery   : chr  "yes" "no" "yes" "yes" ...
##  $ higher    : chr  "yes" "yes" "yes" "yes" ...
##  $ internet  : chr  "no" "yes" "yes" "yes" ...
##  $ romantic  : chr  "no" "no" "no" "yes" ...
##  $ famrel    : int  4 5 4 3 4 5 4 4 4 5 ...
##  $ freetime  : int  3 3 3 2 3 4 4 1 2 5 ...
##  $ goout     : int  4 3 2 2 2 2 4 4 2 1 ...
##  $ Dalc      : int  1 1 2 1 1 1 1 1 1 1 ...
##  $ Walc      : int  1 1 3 1 2 2 1 1 1 1 ...
##  $ health    : int  3 3 3 5 5 5 3 1 1 5 ...
##  $ absences  : int  6 4 10 2 4 10 0 6 0 0 ...
##  $ G1        : int  5 5 7 15 6 15 12 6 16 14 ...
##  $ G2        : int  6 5 8 14 10 15 12 5 18 15 ...
##  $ G3        : int  6 6 10 15 10 15 11 6 19 15 ...
```

Data set is a training data set, thus it is clean. We don't have to do anything to it. Let's plot it to visually see it.

### Visualising student data

Here we will plot only the numeric columns. 


```r
num_cols <- sapply(data, is.numeric);
# Now we filter for correlation data
cor_data <- cor(data[,num_cols])
```

What we're seeing in the `cor_data` variable is a statistical correlation between all of the different variables found in the data frame. Thus, it makes sense that at we get a correlation of "1": `cor_data["age", "age"]; = 1.0`. Note that diagonal of 1s accros the table, this is because all of the features are correlated with themselves.


```r
dim(cor_data);
```

```
## [1] 16 16
```

```r
head(cor_data, 5);
```

```
##                     age        Medu         Fedu  traveltime    studytime
## age         1.000000000 -0.16365842 -0.163438069  0.07064072 -0.004140037
## Medu       -0.163658419  1.00000000  0.623455112 -0.17163930  0.064944137
## Fedu       -0.163438069  0.62345511  1.000000000 -0.15819405 -0.009174639
## traveltime  0.070640721 -0.17163930 -0.158194054  1.00000000 -0.100909119
## studytime  -0.004140037  0.06494414 -0.009174639 -0.10090912  1.000000000
##               failures       famrel    freetime       goout         Dalc
## age         0.24366538  0.053940096  0.01643439  0.12696388  0.131124605
## Medu       -0.23667996 -0.003914458  0.03089087  0.06409444  0.019834099
## Fedu       -0.25040844 -0.001369727 -0.01284553  0.04310467  0.002386429
## traveltime  0.09223875 -0.016807986 -0.01702494  0.02853967  0.138325309
## studytime  -0.17356303  0.039730704 -0.14319841 -0.06390368 -0.196019263
##                   Walc       health    absences          G1         G2
## age         0.11727605 -0.062187369  0.17523008 -0.06408150 -0.1434740
## Medu       -0.04712346 -0.046877829  0.10028482  0.20534100  0.2155272
## Fedu       -0.01263102  0.014741537  0.02447289  0.19026994  0.1648934
## traveltime  0.13411575  0.007500606 -0.01294378 -0.09303999 -0.1531980
## studytime  -0.25378473 -0.075615863 -0.06270018  0.16061192  0.1358800
##                     G3
## age        -0.16157944
## Medu        0.21714750
## Fedu        0.15245694
## traveltime -0.11714205
## studytime   0.09781969
```

Great information, but let's visualise this data.


```r
library("corrplot"); # For plotting correlation diagrams; more common and easy

corrplot(cor_data, method = "color")
```

<img src="/Users/work/Coding/web-sites/derecksnotes/in-progress/entries/intro-ml-R/./intro-ML-R/intro-ML-R_files/figure-html/students-corrplot-1-1.png" style="display: block; margin: auto;" />

There is a high correlation between G1-3, this makes sense because a good student should continue to get good marks, and inversely. Note that mother's and father's education levels are slightly correlated.

Let's do the same thing but with "corrgram". It's a bit more complicated, but the main difference is that corrgram can take in the data frame directly, we don't have to filter or clean anything. Let's do the raw data frame.

<img src="/Users/work/Coding/web-sites/derecksnotes/in-progress/entries/intro-ml-R/./intro-ML-R/intro-ML-R_files/figure-html/students-corrgram-1-1.png" style="display: block; margin: auto;" />

We can add a bunch of additional arguments to corrgram.


```r
corrgram(
	data,
	order = TRUE,
	lower.panel = panel.shade,
	upper.panel = panel.pie,
	text.panel = panel.txt,
	gap = 0.25)
```

<img src="/Users/work/Coding/web-sites/derecksnotes/in-progress/entries/intro-ml-R/./intro-ML-R/intro-ML-R_files/figure-html/students-corrgram-2-1.png" style="display: block; margin: auto;" />

Lower panel are shaded boxes, and the upper are pie charts showing the correlation. 

Now let's plot the G3 score. This is all exploratory in order to see what the data looks like before moving on to anything else.


```r
hist(data$G3, main = "Period 3 scores", xlab = "Students")
```

<img src="/Users/work/Coding/web-sites/derecksnotes/in-progress/entries/intro-ml-R/./intro-ML-R/intro-ML-R_files/figure-html/students-hist-1.png" style="display: block; margin: auto;" />

```r
unique(data$G3)
```

```
##  [1]  6 10 15 11 19  9 12 14 16  5  8 17 18 13 20  7  0  4
```
### Splitting: training/testing data

Now let's do the following:

- Split the data into a training set and testing set.
- Train a linear regression model.
- Interpreting the results of our model.


```r
library("caTools")
set.seed(101)

sample <- sample.split(data$G3, SplitRatio = 0.7) # Splits 70% to training
train <- subset(data, sample == TRUE)
test <- subset(data, sample == FALSE)
```

What we did here is: call "caTools", set a seed to split data in a predictable way; does not need to be set for actual run, got an array of TRUE/FALSE in order to split the data with a sample.split() function from caTools, then filtered or subset from the original data variable into a train variable, and test.

**These lines of code get often used, remember them**.

### Training linear regression model

Here we use the lm() function for a model. This is a linear model function. Passed in is first the feature we want to predict, then tilde and a sum of the features we want to use to make that predictions. Or we can pass in all of the features (columns) from the data frame in order to make the prediction; `~.`.


```r
model <- lm(G3 ~. , train)

summary(model)
```

```
## 
## Call:
## lm(formula = G3 ~ ., data = train)
## 
## Residuals:
##     Min      1Q  Median      3Q     Max 
## -7.4250 -0.6478  0.2844  1.0442  4.9840 
## 
## Coefficients:
##                  Estimate Std. Error t value Pr(>|t|)    
## (Intercept)       3.70763    2.69488   1.376  0.17019    
## schoolMS          0.66981    0.47436   1.412  0.15926    
## sexM              0.25730    0.29257   0.879  0.38006    
## age              -0.36163    0.12949  -2.793  0.00566 ** 
## addressU          0.08123    0.35652   0.228  0.81996    
## famsizeLE3        0.12222    0.28709   0.426  0.67070    
## PstatusT          0.06807    0.43032   0.158  0.87444    
## Medu              0.11100    0.18757   0.592  0.55455    
## Fedu             -0.16373    0.15928  -1.028  0.30503    
## Mjobhealth       -0.63993    0.65314  -0.980  0.32820    
## Mjobother        -0.15730    0.42323  -0.372  0.71048    
## Mjobservices     -0.15872    0.46682  -0.340  0.73415    
## Mjobteacher      -0.04930    0.62335  -0.079  0.93702    
## Fjobhealth        0.17565    0.83034   0.212  0.83265    
## Fjobother        -0.29559    0.56012  -0.528  0.59818    
## Fjobservices     -0.76964    0.59476  -1.294  0.19692    
## Fjobteacher      -0.27009    0.73824  -0.366  0.71480    
## reasonhome       -0.41126    0.31857  -1.291  0.19799    
## reasonother       0.06767    0.45323   0.149  0.88144    
## reasonreputation  0.13478    0.34735   0.388  0.69834    
## guardianmother   -0.05442    0.31663  -0.172  0.86369    
## guardianother     0.01588    0.58375   0.027  0.97832    
## traveltime       -0.02353    0.19540  -0.120  0.90427    
## studytime        -0.04294    0.16910  -0.254  0.79979    
## failures         -0.17219    0.19668  -0.875  0.38220    
## schoolsupyes      0.20742    0.42358   0.490  0.62481    
## famsupyes        -0.05329    0.27753  -0.192  0.84789    
## paidyes           0.31311    0.28284   1.107  0.26941    
## activitiesyes    -0.26104    0.26687  -0.978  0.32901    
## nurseryyes       -0.05345    0.31236  -0.171  0.86428    
## higheryes        -0.94298    0.74005  -1.274  0.20385    
## internetyes      -0.15834    0.37029  -0.428  0.66932    
## romanticyes      -0.30048    0.28115  -1.069  0.28627    
## famrel            0.36601    0.14609   2.505  0.01291 *  
## freetime          0.08386    0.14247   0.589  0.55668    
## goout            -0.12457    0.13306  -0.936  0.35015    
## Dalc             -0.16995    0.20659  -0.823  0.41153    
## Walc              0.21053    0.14963   1.407  0.16074    
## health            0.07805    0.09341   0.836  0.40426    
## absences          0.09547    0.02382   4.008 8.24e-05 ***
## G1                0.14259    0.07892   1.807  0.07206 .  
## G2                0.98859    0.06929  14.267  < 2e-16 ***
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 1.962 on 235 degrees of freedom
## Multiple R-squared:  0.8456,	Adjusted R-squared:  0.8187 
## F-statistic: 31.39 on 41 and 235 DF,  p-value: < 2.2e-16
```
