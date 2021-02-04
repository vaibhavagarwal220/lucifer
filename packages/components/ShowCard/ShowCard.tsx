import { DocumentCard, DocumentCardPreview, DocumentCardTitle, IDocumentCardPreviewProps, ImageFit } from "@fluentui/react";
import React from "react";
import { ShowDetails } from '@lucifer/core'
import ShowCardCSS from './ShowCard.module.css';

interface Props {
    showDetail: ShowDetails
}
  
export const ShowCard: React.FC<Props>= (props: Props) => {
    const previewProps: IDocumentCardPreviewProps = {
        previewImages: [
          { 
            name: props.showDetail.show.name,
            linkProps: {
              href: props.showDetail.show.url,
              target: '_blank',
            },
            previewImageSrc: props.showDetail.show?.image?.medium,
            //iconSrc: ,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
        ],
      };
    return (
      <div className={ShowCardCSS.cardContainer}>
        <DocumentCard
            className={ShowCardCSS.showCard}
            aria-label={props.showDetail.show.name}
            onClickHref={props.showDetail.show.url}
            onClickTarget="_blank"
            >
            <DocumentCardPreview {...previewProps} />
            <DocumentCardTitle
            title={props.showDetail.show.name}
            shouldTruncate
            />
        </DocumentCard>
        <div className={ShowCardCSS.showCardSummary} 
        dangerouslySetInnerHTML={{__html:props.showDetail.show.summary}}>
        </div>

      </div>        
      );
}
  