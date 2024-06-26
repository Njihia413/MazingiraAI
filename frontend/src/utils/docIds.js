const docIds = [
    {"name":"the-impact-of-climate-change.pdf","docId":"dd429a53-436b-4631-875e-686608b06b9e"},
    {"name":"east_africa_climate_change_impacts_final_2.pdf","docId":"2b00c76e-f7b2-4134-a2bf-1bb512c25ce2"},
    {"name":"20240510-Eastern Africa Flood Flash Update Number 2.pdf","docId":"585ee390-af0d-433c-8884-ba3eb844ce8c"},
    {"name":"CLIMATE CHANGE AND DEVELOPMENT - CONSULTATION ON KEY RESEARCHABLE ISSUES.pdf","docId":"80515fb6-2653-4b6a-98cd-7128ce030058"},
    {"name":"cynthia-brenda-awuor-et-al-2008-climate-change-and-coastal-cities-the-case-of-mombasa-kenya.pdf","docId":"7cb06079-9950-40a7-8ee2-b04a33c5e683"},
    {"name":"drb_15-05_dec_2015_revised_jan_18_2016_0.pdf","docId":"757df86c-b7a2-4e3b-ab40-08a16000161e"},
    {"name":"fastfacts-what-is-climate-change.pdf","docId":"fb38f05b-3bf2-4d1c-b568-db38a81a88ab"},
    {"name":"CLIMATEXT - A DATASET FOR CLIMATE CHANGE TOPIC DETECTION.pdf","docId":"ba2eb159-53a3-4f21-b5ab-60b5adad7102"},
    {"name":"Developing a capabilities approach in the context of climate change.pdf","docId":"7f493e8b-f733-45b7-8369-891439468cb4"},
    {"name":"CSW-66-Kenya-Position-Paper-Final-CSW-31.March-2022.pdf","docId":"5a6e800c-ad2d-4838-9ebf-e8ce8f2227fa"},
    {"name":"climatechange-factsheet-rfhe.pdf","docId":"e2f3f391-0b3c-4236-a98b-4a6b059ae7e0"},
    {"name":"ajol-file-journals_20_articles_247109_submission_proof_247109-229-592105-1-10-20230506.pdf","docId":"163709e4-1830-422c-bd3d-722779b669c2"},
    {"name":"WPS-66-Kimundi.pdf","docId":"d05aa360-3c6c-4aef-b432-b4bdb3d94f50"},
    {"name":"IJIRES_303_Final.pdf","docId":"4fad16ab-8b03-4a85-b6d7-65f99c5f9f26"},
    {"name":"RCCC-ICRC-Country-profiles-Kenya.pdf","docId":"94861b9c-6ccf-47b0-b619-88181db88d56"},
    {"name":"Kenya AB 23 Seminar_Laura.pdf","docId":"c5c64279-a98c-4488-9a6f-c97c3f68834b"},
    {"name":"mainstreaming-climate-change-adaptation-kenya_0.pdf","docId":"4473064a-5929-4b16-b232-481a99bb014d"},
    {"name":"THEMATIC-PLAN-FOR-CLIMATE-CHANGE.pdf","docId":"6ccaa5d4-0733-4f25-9982-035cf15663fc"},
    {"name":"2020_12_CAT_Governance_Report_Kenya_KvUzQNR.pdf","docId":"a9fcc5ea-631b-44cc-9cfe-0f016867d22c"},
    {"name":"WP155Russell.pdf","docId":"fabe1e2b-52ce-4e97-802d-cc91720fc1dd"},
    {"name":"Background Report_National Climate Change Priorities and Relevant Capacity Development Goals and Initiatives in Kenya 20072020.pdf","docId":"ced24633-df45-4ba3-b632-81a1cad1c7f3"},
    {"name":"Care reform and climate change.pdf","docId":"641aa4a4-e86d-4589-9da9-51330ea52450"},
    {"name":"20240514_ACAPS_Briefing_note_Kenya_Floods.pdf","docId":"5e3145b2-4a13-4785-9f4b-af3824c3a8ac"},
    {"name":"Transport_Sector_Climate_Change_Annual_Report.pdf","docId":"f7f8587f-208f-4875-bc57-18cfa1819d33"},
    {"name":"Forestry Research Strategy on Climate change.pdf","docId":"8b96dde3-9081-4e7d-8b29-b5fae40cc305"},
    {"name":"KenyaWB_Report3a_FINAL.pdf","docId":"9c425430-97cc-49bd-b6c8-27819bf2672d"},
    {"name":"NDC-Sector-Report-Kenya_Dec2019.pdf","docId":"6bb6620d-8482-4c10-aeab-6ab39d06fe63"},
    {"name":"FULLTEXT03.pdf","docId":"5397a6d6-c91d-43e7-a101-cd401185b55c"},
    {"name":"64257_kenyareportreviewedweb.pdf","docId":"fc6c4dfc-58a8-4184-8d1e-b5649e9be57e"},
    {"name":"STATE OF THE  CLIMATE 2020_14042021.pdf","docId":"e98ab2ed-dbc1-4fb2-92a8-43cfa25ad770"},
    {"name":"15724-WB_Kenya Country Profile-WEB.pdf","docId":"cb8e3966-7140-4e7b-9a75-8955de07174a"},
    {"name":"Climate-Change-Risks-to-Real-Estate-Investment.pdf","docId":"6bdf686a-4e29-456e-a8f2-0127682ff3dc"},
    {"name":"FAC_Working_Paper_070.pdf","docId":"d6c151be-7875-4740-9809-525ff4d16527"},
    {"name":"kenya_climate_smart_agriculture_strategy.pdf","docId":"f9f304bf-728a-4423-95ca-229cc4e46a7e"},
    {"name":"From_climate_risk_to_resilience_Unpackin.pdf","docId":"c3b01475-156e-44af-8c55-8d7254ab5d5f"},
    {"name":"NFCS_Kenya_11_Oct_2023_0.pdf","docId":"0121a1f5-fd04-4536-b059-223cd8ec8e58"},
    {"name":"National Climat Change Action Plan 2018-2022.pdf","docId":"42f4771a-fc49-40d5-aa9d-fc46777b9142"},
    {"name":"CARE-Climate-Migration-Report-v0.4.pdf","docId":"437f7f5d-92ea-4a73-a2a8-fd32409d11d7"},
    {"name":"Kenya-National-Climate-Change-Action-Plan.pdf","docId":"73bc5a23-4283-4843-abeb-550a0dbdf4b2"},
    {"name":"Kenya DRR CCA Coherence Study-ONLINE.pdf","docId":"5be1f160-8bd9-4310-87f7-b842aa44bf0e"},
    {"name":"MAM report - 9th May 2024 (1).pdf","docId":"da916be2-3847-4918-9187-907daad6223a"},
    {"name":"ClimateActionWaterSectorKenyaStatusReview.pdf","docId":"cc2baaf6-e7a3-46a9-a518-7d666ef17fa5"},
    {"name":"Kenya State of Environment Report 2019-2021 final-min.pdf","docId":"91f17c83-2753-4933-818a-70aeef4de4ea"},
    {"name":"kenya_report-on-ccp-final-1-24-9-2020-.pdf","docId":"46d0fe0a-04e9-4acf-908d-6a4fdc6186e4"},
    {"name":"Nairobi Climate Action Plan 2020 - 2050.pdf","docId":"1bd42b27-74c7-4d4b-a624-521df97ffb56"},
  ]
  
  export default docIds