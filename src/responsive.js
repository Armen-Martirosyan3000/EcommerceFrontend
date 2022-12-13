import { css } from "styled-components";//styled-components-ից իմփորթ ենք անում css-ը

//այստեղ ստեղծում ենք մեր ռեսպոնսիվե կոմպոնենտը,որպեսզի ամեն անգամ մեր բոլոր կոմպոնենտներում  @media-ի կառուցվածքը չտանք , այստեղ ստեղծում ենք որ այստեղից փոխանցենք, քանի որ մեր կոմպոնենտները բավականին շատ են 
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};

