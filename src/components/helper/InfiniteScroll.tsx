import React from "react";
import "./InfiniteScroll.css";

export interface ScrollItem {
  title: string;
  date: string;
}

interface InfiniteScrollProps {
  items: ScrollItem[];
  duration?: number;
  className?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  duration = 30,
  className = "",
}) => {
  if (items.length === 0) return null;

  return (
    <div
      className={`infinite-scroll ${className}`}
      style={{ "--scroll-duration": `${duration}s` } as React.CSSProperties}
      aria-label="Scrolling items"
    >
      <div className="infinite-scroll__track">
        {[0, 1].map((copy) => (
          <div
            className="infinite-scroll__group"
            key={copy}
            aria-hidden={copy === 1}
          >
            {items.map((item, index) => (
              <div
                className="infinite-scroll__item"
                key={`${copy}-${index}`}
              >
                <div className="infinite-scroll__title">
                  {item.title}
                </div>
                <div className="infinite-scroll__date">
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;