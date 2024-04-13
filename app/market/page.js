"use client"

import Card from "@/components/NFTCard"

import React from 'react'

const dummyData = [
    {
      modelName: "Product Analysis",
      description: "Analyze customer behavior and identify trends using this comprehensive data set.",
      viewDataUrl: "/product-analysis/data",
      shareDataUrl: "/product-analysis/share",
    },
    {
      modelName: "Social Media Engagement",
      description: "Track your social media performance and gain insights into audience engagement.",
      viewDataUrl: "/social-media/data",
      shareDataUrl: "/social-media/share",
    },
    {
      modelName: "Website Traffic Analysis",
      description: "Understand user behavior on your website and identify opportunities for improvement.",
      viewDataUrl: "/website-traffic/data",
      shareDataUrl: "/website-traffic/share",
    },
    {
      modelName: "Marketing Campaign Performance",
      description: "Measure the effectiveness of your marketing campaigns and optimize for better results.",
      viewDataUrl: "/marketing-campaign/data",
      shareDataUrl: "/marketing-campaign/share",
    },
    {
      modelName: "Customer Satisfaction Survey",
      description: "Get feedback from your customers and understand their needs and preferences.",
      viewDataUrl: "/customer-satisfaction/data",
      shareDataUrl: "/customer-satisfaction/share",
    },
    {
      modelName: "Sales Performance Dashboard",
      description: "Monitor your sales performance and identify areas for growth with this interactive dashboard.",
      viewDataUrl: "/sales-performance/data",
      shareDataUrl: "/sales-performance/share",
    },
    {
      modelName: "Financial Report",
      description: "Visualize your financial data and gain insights into your company's financial health.",
      viewDataUrl: "/financial-report/data",
      shareDataUrl: "/financial-report/share",
    },
    {
      modelName: "Budget Tracker",
      description: "Stay on top of your finances and track your spending with this easy-to-use tool.",
      viewDataUrl: "/budget-tracker/data",
      shareDataUrl: "/budget-tracker/share",
    },
    {
      modelName: "Project Management Dashboard",
      description: "Manage your projects efficiently and track progress with this customizable dashboard.",
      viewDataUrl: "/project-management/data",
      shareDataUrl: "/project-management/share",
    },
    {
      modelName: "Team Collaboration Data",
      description: "Analyze team communication and identify opportunities for better collaboration.",
      viewDataUrl: "/team-collaboration/data",
      shareDataUrl: "/team-collaboration/share",
    },
  ];
  

const marketplace = () => {
  return (
    <div className="container mx-auto">
        <h1>Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dummyData.map((cardData) => (
          <Card key={cardData.modelName} {...cardData} />
        ))}
      </div>
    </div>
  )
}

export default marketplace