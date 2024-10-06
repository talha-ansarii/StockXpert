import React from 'react';

const Insights = ({ company }) => {

  const companyInsights = {
    "Reliance": "Reliance Industries Limited (RIL) demonstrates robust market confidence, reflected in its stable price-to-earnings (P/E) ratio. This stability suggests that investors view the company as fairly valued relative to its earnings, underscoring a positive outlook for future growth. The company has shown impressive revenue growth across its diverse sectors, including telecommunications and retail. With a solid balance sheet and strong cash flow generation, Reliance is well-positioned to capitalize on emerging opportunities, particularly in renewable energy and digital services. Overall, the combination of stability and growth potential makes Reliance an attractive investment choice.",
    
    "Tata Motors": "Tata Motors has been steadily improving its market position, driven by a strong portfolio of electric vehicles and traditional automotive offerings. The company's focus on sustainability and innovation has resonated with consumers and investors alike. Despite some market volatility, Tata Motors maintains a positive outlook, supported by strategic partnerships and expansions into new markets. The company's consistent efforts to enhance operational efficiency and product quality indicate a commitment to long-term growth and profitability.",
    
    "Infosys": "Infosys is a global leader in IT services and consulting, recognized for its strong performance and consistent revenue growth. The company's robust client relationships and strategic investments in digital transformation initiatives have positioned it well in the ever-evolving tech landscape. With a focus on innovation and talent development, Infosys continues to enhance its competitive edge. The stable financial health and commitment to shareholder value make Infosys a compelling choice for investors looking for growth in the technology sector."
  };

  console.log(company)
  return (
    <div className="border p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold">Insights for {company}</h2>
      <p>{companyInsights[company]}</p>
      
    </div>
  );
};

export default Insights;
    