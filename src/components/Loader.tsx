import React from "react";

export function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="90"
      x="0"
      y="0"
      enableBackground="new 0 0 50 50"
      version="1.1"
      viewBox="0 0 24 30"
      xmlSpace="preserve"
    >
      <path fill="#31ffa6" d="M0 10H4V20H0z" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
          values="0.2; 1; .2"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
          values="50; 60; 50"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
          values="10; 5; 10"
        ></animate>
      </path>
      <path fill="#31ffa6" d="M8 10H12V20H8z" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
          values="0.2; 1; .2"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
          values="50; 60; 50"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
          values="40; 60; 40"
        ></animate>
      </path>
      <path fill="#31ffa6" d="M16 10H20V20H16z" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
          values="0.2; 1; .2"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
          values="50; 60; 50"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
          values="40; 60; 40"
        ></animate>
      </path>
    </svg>
  );
}