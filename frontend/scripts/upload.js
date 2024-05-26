const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

// Get more info on uploading documents to askyourpdf here; https://docs.askyourpdf.com/askyourpdf-docs

const bookTitles = [
  "15724-WB_Kenya Country Profile-WEB.pdf",
  "2020_12_CAT_Governance_Report_Kenya_KvUzQNR.pdf",
  "20240510-Eastern Africa Flood Flash Update Number 2.pdf",
  "20240514_ACAPS_Briefing_note_Kenya_Floods.pdf",
  "64257_kenyareportreviewedweb.pdf",
  "Background Report_National Climate Change Priorities and Relevant Capacity Development Goals and Initiatives in Kenya 20072020.pdf",
  "CARE-Climate-Migration-Report-v0.4.pdf",
  "CLIMATE CHANGE AND DEVELOPMENT - CONSULTATION ON KEY RESEARCHABLE ISSUES.pdf",
  "CLIMATEXT - A DATASET FOR CLIMATE CHANGE TOPIC DETECTION.pdf",
  "CSW-66-Kenya-Position-Paper-Final-CSW-31.March-2022.pdf",
  "Care reform and climate change.pdf",
  "Climate Change Knowledge Gap in Education System.pdf",
  "Climate-Change-Risks-to-Real-Estate-Investment.pdf",
  "ClimateActionWaterSectorKenyaStatusReview.pdf",
  "Developing a capabilities approach in the context of climate change.pdf",
  "FAC_Working_Paper_070.pdf",
  "FULLTEXT03.pdf",
  "Forestry Research Strategy on Climate change.pdf",
  "From_climate_risk_to_resilience_Unpackin.pdf",
  "IJIRES_303_Final.pdf",
  "Kenya AB 23 Seminar_Laura.pdf",
  "Kenya DRR CCA Coherence Study-ONLINE.pdf",
  "Kenya State of Environment Report 2019-2021 final-min.pdf",
  "Kenya-National-Climate-Change-Action-Plan.pdf",
  "KenyaWB_Report3a_FINAL.pdf",
  "MAM report - 9th May 2024 (1).pdf",
  "Mombasa-County-Climate-Change-Action-Plan.pdf",
  "NDC-Sector-Report-Kenya_Dec2019.pdf",
  "NFCS_Kenya_11_Oct_2023_0.pdf",
  "Nairobi Climate Action Plan 2020 - 2050.pdf",
  "National Climat Change Action Plan 2018-2022.pdf",
  "RCCC-ICRC-Country-profiles-Kenya.pdf",
  "STATE OF THE  CLIMATE 2020_14042021.pdf",
  "THEMATIC-PLAN-FOR-CLIMATE-CHANGE.pdf",
  "Transport_Sector_Climate_Change_Annual_Report.pdf",
  "WP155Russell.pdf",
  "WPS-66-Kimundi.pdf",
  "ajol-file-journals_20_articles_247109_submission_proof_247109-229-592105-1-10-20230506.pdf",
  "climate_risks_kenya.pdf",
  "climatechange-factsheet-rfhe.pdf",
  "cynthia-brenda-awuor-et-al-2008-climate-change-and-coastal-cities-the-case-of-mombasa-kenya.pdf",
  "drb_15-05_dec_2015_revised_jan_18_2016_0.pdf",
  "east_africa_climate_change_impacts_final_2.pdf",
  "fastfacts-what-is-climate-change.pdf",
  "kenya_climate_smart_agriculture_strategy.pdf",
  "kenya_report-on-ccp-final-1-24-9-2020-.pdf",
  "mainstreaming-climate-change-adaptation-kenya_0.pdf",
  "the-impact-of-climate-change.pdf",
]

const headers = {
    'x-api-key': 'ASK_YOUR_PDF_API_KEY'
};

fs.appendFile('./docIds.js', "const docIds = [" + "\n", (err) => {
  if (err) console.error(err?.message);
})
bookTitles.forEach(title => {
  let form = new FormData();
  form.append('file', fs.createReadStream(`../documents/${title}`));
  
  axios.post('https://api.askyourpdf.com/v1/api/upload', form, {
    headers: {
      ...headers,
      ...form.getHeaders()
    }
  }).then((response) => {
    if (response.status === 201) {
      const file = { name: title, docId: response.data.docId }
      fs.appendFile('./docIds.js', "  " + JSON.stringify(file) + ",\n", (err) => {
        if (err) console.error(err?.message);
      })
    } else {
      console.error('Error:', response.status);
    }
  }).catch((error) => {
    console.error(error);
  });
})
