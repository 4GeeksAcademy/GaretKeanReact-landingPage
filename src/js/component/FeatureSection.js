// src/FeatureSection.js
import React from 'react';

const FeatureSection = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Feature One</h5>
              <p className="card-text">Description of feature one.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Feature Two</h5>
              <p className="card-text">Description of feature two.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Feature Three</h5>
              <p className="card-text">Description of feature three.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
