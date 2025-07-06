import { Box, Typography, Divider } from '@mui/material';

const articles = [
  "The Epigenetics Revolution: How Modern Biology Is Rewriting Our Understanding of Genetics, Disease and Inheritance",
  "Exercise Training and Rehabilitation in Pulmonary Hypertension",
  "The Role of Vitamin D in Fertility and during Pregnancy and Lactation: A Review of Clinical Data",
  "Different Genomic Mutation Signatures are Associated to Specific PD-L1/TMB States on Lung Cancer with Potential Value for Patients Screening for Immunotherapy"
];

const tabs = ['Latest published', 'Articles in press', 'Top cited', 'Most downloaded', 'Most popular'];

const ArticlesSection = () => (
  <Box sx={{ ml: 10, width: 750 }}>
    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Articles</Typography>
    <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
      {tabs.map((label, idx) => (
        <Typography key={idx} sx={{ fontWeight: 'bold' }}>{label}</Typography>
      ))}
    </Box>
    <Divider sx={{ my: 2 }} />
    {articles.map((title, idx) => (
      <Box key={idx} sx={{ background: '#d2e2f0', mt: idx === 0 ? 0 : 3, p: 3 }}>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='body1' sx={{ fontSize: 'small', mt: 2 }}>
          Jennifer A. Doudna, Samuel H. Sternberg — Houghton Mifflin Harcourt
        </Typography>
        <Typography variant='body1' fontSize='small' color='#afafaf'>
          Int J Environ Res Public Health. 2018 Oct 12;15(10):2241. doi:10.3390/ijerph15102241
        </Typography>
      </Box>
    ))}
  </Box>
);

export default ArticlesSection;
