"use strict";

const about = document.querySelector(".about-section");
const navigation = document.querySelector("nav");
const header = document.querySelector("#initial");

const Callback = function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) {
        navigation.classList.add("sticky");
    } else {
        navigation.classList.remove("sticky");
    }
};

const objeto = {
    root: null,
    threshold: 0,
};

const observer = new IntersectionObserver(Callback, objeto);
observer.observe(header);

const sections = document.querySelectorAll(".section");

const AllSections = function (sec) {
    const [allsec] = sec;

    if (!allsec.isIntersecting) return;

    allsec.target.classList.remove("section-hidden");

    observer.unobserve(allsec.target);
};

const settings = {
    root: null,
    threshold: 0,
};

const sectionObserver = new IntersectionObserver(AllSections, settings);
sections.forEach(function (el) {
    sectionObserver.observe(el);
});

const modals = document.querySelectorAll(".project");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

modals.forEach(function (g, t) {
    const AllProjects = document.querySelector(`.project-${t}`);
    g.addEventListener("click", function () {
        AllProjects.classList.remove("project-hidden");
        overlay.classList.remove("project-hidden");
    });
});

const botão = document.querySelectorAll(".close-btn");
botão.forEach(function (e) {
    e.addEventListener("click", fechar);
});

overlay.addEventListener("click", fechar);

function fechar() {
    const projeto = document.querySelectorAll(".projeto");
    projeto.forEach(function (f) {
        f.classList.add("project-hidden");
    });
    overlay.classList.add("project-hidden");
}

const BtnIcon = document.querySelector(".btn-icon");
const BtnClose = document.querySelector(".btn-close");
const MenuBox = document.querySelector(".menu-box");
const MenuLinks = document.querySelectorAll(".menu-box ul li a");

function AbrirMenu() {
    MenuBox.classList.add("topHidden");
    overlay.classList.remove("project-hidden");
}

function FecharMenu() {
    MenuBox.classList.remove("topHidden");
    overlay.classList.add("project-hidden");
}

BtnIcon.addEventListener("click", AbrirMenu);
BtnClose.addEventListener("click", FecharMenu);
overlay.addEventListener("click", FecharMenu);
MenuLinks.forEach(function (e) {
    e.addEventListener("click", FecharMenu);
});