var getUrlParameter = function(t) {
    var e, l, o = window.location.search.substring(1).split("&");
    for (l = 0; l < o.length; l++)
        if ((e = o[l].split("="))[0] === t) return void 0 === e[1] || decodeURIComponent(e[1])
};

function getJobs() {
    return $(".remote .ee-active")[0] ? rem = "1" : rem = "", sear = $("#inputSearch").val(), eJobs(limit, start, loc, acc, inv, rem, rol, sear, size, stag)
}

function successFunc(t) {
z = t.currentPage;
    return $(".loading").hide(), console.log(url), console.log(z), 25 <= t.count ? $("#loadMore").show() : $("#loadMore").hide(), $.each(t, function(t, e) {

        $.each(e, function(t, e) {
            let l = [e];
            $("#Careers").json2html(l, {
                "<>": "div",
                id: "${id}",
                class: "career-item mix w-dyn-item",
                html: [{
                    "<>": "div",
                    class: "columns-3 w-row",
                    html: [{
                        "<>": "div",
                        class: "job w-col w-col-9",
                        html: [{
                            "<>": "div",
                            class: "career",
                            html: [{
                                "<>": "a",
                                href: "${companyUrl}",
                                target: "_blank",
                                class: "business-logo",
                                html: [{
                                    "<>": "img",
                                    src: "${logoUrl}",
                                    html: ""
                                }]
                            }, {
                                "<>": "div",
                                class: "link-block-4 w-inline-block",
                                html: [{
                                    "<>": "div",
                                    class: "title-block",
                                    html: [{
                                        "<>": "h4",
                                        class: "company",
                                        html: "\n\t\t\t\t\t\t${companyName}\n\t\t\t\t\t"
                                    }, {
                                        "<>": "a",
                                        href: "${websiteUrl}",
                                        target: "_blank",
                                        class: "job-title",
                                        html: "\n\t\t\t\t\t\t${jobTitle}\n\t\t\t\t\t"
                                    }, {
                                        "<>": "div",
                                        class: "text-block",
                                        html: "\n\t\t\t\t\t\t${companyTagline}\n\t\t\t\t\t"
                                    }]
                                }]
                            }]
                        }, {
                            "<>": "div",
                            class: "job-links",
                            html: [{
                                "<>": "div",
                                class: "job-specs",
                                html: [{
                                    "<>": "div",
                                    class: "spec-wrap w-clearfix",
                                    html: [{
                                        "<>": "img",
                                        src: "https://assets.website-files.com/5e596a981c377e6f2eb94b2f/5e596a981c377e30dbb94b52_Icon%20Location.png",
                                        alt: "",
                                        class: "job-icon",
                                        html: ""
                                    }, {
                                        "<>": "div",
                                        class: "icon-text location",
                                        html: "\n\t\t\t\t\t\t\t${location}\n\t\t\t\t\t\t"
                                    }]
                                }, {
                                    "<>": "div",
                                    class: "spec-wrap w-clearfix",
                                    html: [{
                                        "<>": "img",
                                        src: "https://assets.website-files.com/5e596a981c377e6f2eb94b2f/5e596a981c377e2678b94b68_Icon%20number%20fo%20employees.png",
                                        alt: "",
                                        class: "job-icon",
                                        html: ""
                                    }, {
                                        "<>": "div",
                                        class: "icon-text",
                                        html: "\n\t\t\t\t\t\t\t${employees}\n\t\t\t\t\t\t"
                                    }]
                                }, {
                                    "<>": "div",
                                    class: "spec-wrap w-clearfix",
                                    html: [{
                                        "<>": "img",
                                        src: "https://assets.website-files.com/5e596a981c377e6f2eb94b2f/5e596a981c377e4fe2b94b54_Icon%20Stage.png",
                                        alt: "",
                                        class: "job-icon",
                                        html: ""
                                    }, {
                                        "<>": "div",
                                        class: "icon-text",
                                        html: "\n\t\t\t\t\t\t\t${stage}\n\t\t\t\t\t\t"
                                    }]
                                }]
                            }, {
                                "<>": "div",
                                class: "links-wrap",
                                html: [{
                                    "<>": "a",
                                    href: "${crunchbaseUrl}",
                                    target: "_blank",
                                    class: "link-block w-inline-block w-clearfix",
                                    html: [{
                                        "<>": "img",
                                        src: "https://assets.website-files.com/5e596a981c377e6f2eb94b2f/5e596a981c377ef5dfb94b57_Icon%20Crunchbase.png",
                                        alt: "",
                                        class: "job-icon",
                                        html: ""
                                    }]
                                }, {
                                    "<>": "a",
                                    href: "${angellistUrl}",
                                    target: "_blank",
                                    class: "link-block w-inline-block w-clearfix",
                                    html: [{
                                        "<>": "img",
                                        src: "https://assets.website-files.com/5e596a981c377e6f2eb94b2f/5e596a981c377e5680b94b76_Icon%20Angel%20List.png",
                                        width: "16",
                                        alt: "",
                                        class: "job-icon",
                                        html: ""
                                    }]
                                }, {
                                    "<>": "a",
                                    href: "${twitterUrl}",
                                    target: "_blank",
                                    class: "link-block w-inline-block w-clearfix",
                                    html: [{
                                        "<>": "img",
                                        src: "https://assets.website-files.com/5e596a981c377e6f2eb94b2f/5e596a981c377e4ef5b94b63_twitter2.svg",
                                        width: "22",
                                        alt: "",
                                        class: "job-icon twitter",
                                        html: ""
                                    }]
                                }, {
                                    "<>": "a",
                                    href: "${facebookUrl}",
                                    target: "_blank",
                                    class: "link-block w-inline-block w-clearfix",
                                    html: [{
                                        "<>": "img",
                                        src: "https://assets.website-files.com/5e596a981c377e6f2eb94b2f/5e596a981c377e01c5b94b6e_facebook2.svg",
                                        width: "22",
                                        alt: "",
                                        class: "job-icon twitter",
                                        html: ""
                                    }]
                                }, {
                                    "<>": "a",
                                    href: "${linkedinUrl}",
                                    target: "_blank",
                                    class: "link-block w-inline-block w-clearfix",
                                    html: [{
                                        "<>": "img",
                                        src: "https://assets.website-files.com/5e596a981c377e6f2eb94b2f/5e596a981c377e2fdbb94b6a_linkedin2.svg",
                                        width: "22",
                                        alt: "",
                                        class: "job-icon twitter",
                                        html: ""
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        "<>": "div",
                        class: "investor-logos w-col w-col-3",
                        html: [{
                            "<>": "h6",
                            class: "investors",
                            html: "Investors <span>${id}</span>"
                        }, {
                            "<>": "div",
                            class: "investor-text",
                            html: "\n\t\t\t\t${investors}\n\t\t\t"
                        }]
                    }]
                }]
            }), $(".investor-text, .icon-text").each(function(t, e) {
                $.trim($(this).html()).length || $(this).parent("div").addClass("hidden");
                var l = $(this).text().replace(/,/g, ", ");
                $(this).empty(), $(this).html(l)
            })
        })
    }), !1
}

function iJobs(t, e, l, o, c, a, i, n) {
    urlj = "https://684984654984.xyz:8443/job/" + j, $(".loading").show(), $("#loadMore").hide(), url = urlj, startx = e, limitx = t, s = "&location=" + l + "&accelerator=" + o + "&investor=" + c + "&remote=" + a + "&job%20title=" + i + "&term=" + n, s = s.replace(/[^=&]+=(&|$)/g, "").replace(/&$/, ""), console.log(url + "?page=" + startx + "&size=" + limitx + s), $.ajax({
        type: "GET",
        url: url + "?page=" + startx + "&size=" + limitx + s + "&sort=dateAdded,desc",
        dataType: "json",
        data: {
            get_param: "value"
        },
        success: successFunc
    }), $(".location").each(function(t, e) {
        $.trim($(".location").html()) || console.log("asdasdasd")
    }), $("#loadAll").removeClass("hidden-button"), $("#loadAll").on("click", function(t) {
        limit = "25", start = "0", loc = "", acc = "", inv = "", rem = "", rol = "", size="", stag="", getJobs(), $(this).addClass("hidden-button")
    })
}

function eJobs(t, e, l, o, c, a, i, n, s, m) {
    urlm = "https://684984654984.xyz:8443/job/merged", console.log(urlm), $(".loading").show(), $("#loadMore").hide(), url = urlm, startx = e, limitx = t, s = "&location=" + l + "&accelerator=" + o + "&investor=" + c + "&remote=" + a + "&job%20title=" + i + "&employeesNumber=" + s + "&stage=" + m + "&term=" + n, s = s.replace(/[^=&]+=(&|$)/g, "").replace(/&$/, ""), console.log(url + "?page=" + startx + "&size=" + limitx + s), $.ajax({
        type: "GET",
        url: url + "?page=" + startx + "&size=" + limitx + s + "&sort=dateAdded,desc",
        dataType: "json",
        data: {
            get_param: "value"
        },
        success: successFunc
    }), $(".location").each(function(t, e) {
        $.trim($(".location").html()) || console.log("asdasdasd")
    }), console.log(url)
}

function lJobs(t, e, l, o, s, c, a, i) {
    urll = "https://684984654984.xyz:8443/job/merged", startx = "0", limitx = "25", $(".loading").show(), $("#loadMore").hide(), url = urll, $.ajax({
        type: "GET",
        url: url + "?page=" + startx + "&size=" + limitx + "&sort=dateAdded,desc",
        dataType: "json",
        data: {
            get_param: "value"
        },
        success: successFunc
    }), $(".location").each(function(t, e) {
        $.trim($(".location").html()) || console.log("asdasdasd")
    })
}

function cJobs(t) {
    urll = "https://684984654984.xyz:8443/job/merged", startx = "0", limitx = "25", $(".loading").show(), $("#loadMore").hide(), url = urll, $.ajax({
        type: "GET",
        url: url + "?page=" + startx + "&size=" + limitx + "&company=" + t + "&sort=dateAdded,desc",
        dataType: "json",
        data: {
            get_param: "value"
        },
        success: successFunc
    }), $(".location").each(function(t, e) {
        $.trim($(".location").html()) || console.log("asdasdasd")
    }), $("#loadAll").removeClass("hidden-button")
}
j = "", "undefined" !== getUrlParameter("job") && (j = getUrlParameter("job"), iJobs()), $(document).ready(function() {
    "undefined" == typeof j && (lJobs(), $("#loadAll").addClass("hidden-button"))
}), $("#inputSearch").keypress(function(t) {
    13 == t.which && (document.contains(document.getElementById("SelectorTags")) && (document.getElementById("SelectorTags").innerHTML = ""), $(".ee-active").each(function(t, e) {
        var l = $(this).html();
        document.getElementById("SelectorTags").innerHTML += "<span class='filtertag'>" + l + "</span>"
    }), $(".career-item").remove(), limit = "25", start = "0", loc = "", blkstr = [], $(".location .ee-active").each(function(t, e) {
        var l = $(this).html();
        blkstr.push(l), console.log(blkstr.join("&location=")), loc = blkstr.join("&location=")
    }), acc = "", accstr = [], $(".accelerator .ee-active").each(function(t, e) {
        var l = $(this).html();
        accstr.push(l), console.log(accstr.join("&accelerator=")), acc = accstr.join("&accelerator=")
    }), inv = "", invstr = [], $(".investor .ee-active").each(function(t, e) {
        var l = $(this).html();
        invstr.push(l), console.log(accstr.join("&investor=")), inv = invstr.join("&investor=")
    }), rol = "", rolr = [], $(".role .ee-active").each(function(t, e) {
        var l = $(this).html();
        rolr.push(l), console.log(rolr.join("&jobtitle=")), rol = rolr.join("&jobtitle=")
    }), siz = "", size = [], $(".size .ee-active").each(function(t, e) {
        var p = $(this).html();
        var q = p.indexOf('-');
        var l = p.substring(0, q);
        size.push(l), console.log(size.join("&employeesNumber=")), siz = size.join("&employeesNumber=")
    }), sta = "", stag = [], $(".funding .ee-active").each(function(t, e) {
        var l = $(this).html();
        stag.push(l), console.log(stag.join("&stag=")), sta = stag.join("&stage=")
    }), getJobs())
}), $(".filter").on("click", function(t) {
    if ($(t.target).hasClass('jt')) {
                $(".dropdown-list.role .filter").not($(this)).removeClass("ee-active");
    }
    
    document.contains(document.getElementById("SelectorTags")) && (document.getElementById("SelectorTags").innerHTML = ""), $(this).toggleClass("ee-active"), $(".ee-active").each(function(t, e) {
        var l = $(this).html();
        document.getElementById("SelectorTags").innerHTML += "<span class='filtertag'>" + l + "</span>"
    }), $(".career-item").remove(), limit = "25", start = "0", loc = "", blkstr = [], $(".location .ee-active").each(function(t, e) {
        var l = $(this).html();
        blkstr.push(l), console.log(blkstr.join("&location=")), loc = blkstr.join("&location=")
    }), acc = "", accstr = [], $(".accelerator .ee-active").each(function(t, e) {
        var l = $(this).html();
        accstr.push(l), console.log(accstr.join("&accelerator=")), acc = accstr.join("&accelerator=")
    }), inv = "", invstr = [], $(".investor .ee-active").each(function(t, e) {
        var l = $(this).html();
        invstr.push(l), console.log(accstr.join("&investor=")), inv = invstr.join("&investor=")
    }), rol = "", rolr = [], $(".role .ee-active").each(function(t, e) {
        var l = $(this).html();
        rolr.push(l), console.log(rolr.join("&jobtitle=")), rol = rolr.join("&jobtitle=")
    }), siz = "", size = [], $(".size .ee-active").each(function(t, e) {
        var p = $(this).html();
        var q = p.indexOf('-');
        var l = p.substring(0, q);
        size.push(l), console.log(size.join("&employeesNumber=")), siz = size.join("&employeesNumber=")
    }), sta = "", stag = [], $(".funding .ee-active").each(function(t, e) {
        var l = $(this).html();
        stag.push(l), console.log(stag.join("&stag=")), sta = stag.join("&stage=")
    }), getJobs()
}), $(document).on("click", ".filtertag", function() {
    var t = $(this).text();
    $("a.ee-active:contains(" + t + ")")[0].click()
}), $("#loadMore").on("click", function(t) {
    limit = $(this).attr("data-limit"), start = z + 1 , loc = "", blkstr = [], $(".location .ee-active").each(function(t, e) {
        var l = $(this).html();
        blkstr.push(l), console.log(blkstr.join("&location=")), loc = blkstr.join("&location=")
    }), acc = "", accstr = [], $(".accelerator .ee-active").each(function(t, e) {
        var l = $(this).html();
        accstr.push(l), console.log(accstr.join("&accelerator=")), acc = accstr.join("&accelerator=")
    }), inv = "", invstr = [], $(".investor .ee-active").each(function(t, e) {
        var l = $(this).html();
        invstr.push(l), console.log(accstr.join("&investor=")), inv = invstr.join("&investor=")
    }), rol = "", rolr = [], $(".role .ee-active").each(function(t, e) {
        var l = $(this).html();
        rolr.push(l), console.log(rolr.join("&jobtitle=")), rol = rolr.join("&jobtitle=")
    }), siz = "", size = [], $(".size .ee-active").each(function(t, e) {
        var p = $(this).html();
        var q = p.indexOf('-');
        var l = p.substring(0, q);
        size.push(l), console.log(size.join("&employeesNumber=")), siz = size.join("&employeesNumber=")
    }), sta = "", stag = [], $(".funding .ee-active").each(function(t, e) {
        var l = $(this).html();
        stag.push(l), console.log(stag.join("&stag=")), sta = stag.join("&stage=")
    }), getJobs(), t.preventDefault()
});
