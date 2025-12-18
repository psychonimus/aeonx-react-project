import React, { useState } from 'react';
import './DownloadList.css';

export const DownloadList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className={`category-list-container ${className || ''}`}>
      <div className="category-list-inner">
        {/* Header Section */}
        

        {/* Categories List */}
        <div className="categories-list">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-item-wrapper"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={`category-item ${hoveredItem === category.id ? 'category-item--hovered' : ''}`}
              >
                {/* Corner brackets that appear on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="corner-bracket corner-bracket--top-left">
                      <div className="bracket-horizontal" />
                      <div className="bracket-vertical" />
                    </div>
                    <div className="corner-bracket corner-bracket--bottom-right">
                      <div className="bracket-horizontal" />
                      <div className="bracket-vertical" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="category-content">
                  <div className="category-text">
                    <h3
                      className={`category-item-title ${category.featured ? 'category-item-title--featured' : ''} ${hoveredItem === category.id ? 'category-item-title--hovered' : ''}`}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={`category-item-subtitle ${hoveredItem === category.id ? 'category-item-subtitle--hovered' : ''}`}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Icon appears on the right on hover */}
                  <div className="category-icon">
                      {category.icon}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadList;
