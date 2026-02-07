"use client";

import { useEffect, useState } from "react";

const texts = ["a developer", "a problem solver" , "a lifelong learner", "a tech explorer"];

export default function RotatingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;

    if (!deleting && text.length < current.length) {
      // typing
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 80);
    } 
    else if (!deleting && text.length === current.length) {
      // pause before deleting
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1200);
    } 
    else if (deleting && text.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 50);
    } 
    else if (deleting && text.length === 0) {
      // move to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="text-foreground">
      {text}
      <span className="ml-1 opacity-60">|</span>
    </span>
  );
}
