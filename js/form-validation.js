var allesGoed,d=document;function initForm(){if(!d.getElementById("send"))return!1;console.log("2 Formulier geladen!"),d.getElementById("send").addEventListener("click",function(e){valideerForm(e)}),d.getElementById("reset").addEventListener("click",function(e){resetForm(e)})}function resetForm(e){console.log("3 knop gedrukt!");e.target.form;confirm("Delete all filled in text?\n Are you sure?")||e.preventDefault()}function valideerForm(e){e.preventDefault();var l=e.target.form,t=l.elements;for(element of(allesGoed=!0,t)){if("text"==element.type&&(element.value.length<=1?formFeedback(element,!1):formFeedback(element,!0)),"firstname"==element.name){var n=element.value,a=/^[a-z][A-Z]{3,99} ?(?!0-9)$/i.test(n),m=element.value.length;formFeedback(element,!(m<3||m>99))}if("email"==element.name){var o=element.value,r=(a=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,99}$/.test(o),m=element.value.length,element.value.indexOf("@")),d=element.value.lastIndexOf(".");m=element.value.length;formFeedback(element,!(m<8||r<2||d<=r+2))}if("username"==element.name){var s=element.value;a=/^[1-9][0-9]{4}?[A-Z][a-z]{5,10}$/i.test(s),m=element.value.length;formFeedback(element,!(m<5||m>10))}if("password"==element.name){var i=element.value;a=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(i),m=element.value.length;formFeedback(element,!(m<=5))}if("dbirth"==element.name){var f=element.value;a=/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/.test(f),m=element.value.length;formFeedback(element,!(m<=5))}if("telephone"==element.name){var u=element.value;a=/^[1-9][0-9]{10} ?$/.test(u),m=element.value.length;formFeedback(element,!(m<10||m>18))}if("postcode"==element.name){var v=element.value;a=/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(v);formFeedback(element,!!a)}}console.log("Het formulier is: "+allesGoed),allesGoed&&l.submit()}function formFeedback(e,l){var t=d.getElementById(e.id+"_error");l?(t.style.display="none",e.style.backgroundColor="orange",e.style.borderColor="#0f0"):(t.style.display="inline-block",e.style.backgroundColor="#ffccff",e.style.borderColor="white",allesGoed=!1)}window.addEventListener("load",function(){console.log("1 Document geladen!");var e=d.getElementsByClassName("noJS");for(element of e)element.style.display="none";var l=d.getElementsByClassName("yesJS");for(element of l)element.style.display="block";initForm()});