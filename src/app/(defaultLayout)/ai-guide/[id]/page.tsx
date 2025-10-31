import React from 'react';
import Banner from '../../../Components/AiGuide/banner';
import ExplainGuide from '../../../Components/AiGuide/explain-guide';
import AIGuideArticle from '../../../Components/AiGuide/AIGuideArticle';
import { AIDATA } from '../../../Data/Aidata';


interface AiDataProps {
  params: Promise<{
    id: string;
  }>;}
const page = async ({ params }: AiDataProps) => {

    const resolvedParams = await params;
    
      const AiData = AIDATA.find(
        (obj) => obj.link?.toLowerCase() === resolvedParams.id?.toLowerCase()
      );
    
 if (!AiData) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Service not found
      </div>
    );
  }

  const {
    link = {},
    BannerSection = {},
    explainguide = [],
    AIArticleContent = [],
  } = AiData;


    return (
        <div>
            <Banner data={AiData?.BannerSection}></Banner>
            <ExplainGuide data={AiData?.explainguide}></ExplainGuide>
            <AIGuideArticle data={AIArticleContent}/>





        </div>
    );
};

export default page;