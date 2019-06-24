# Historical linguistics

- HT is the scientific study of linguistic change and evolution
  in time, in fields like dialectology, psycholinguistics,
  and philosophy of language
  
- HT is frequently taken as a synonym for "comparative linguistics",
  or even for "Indo-European studies"
  
- Laymen more familiar with family trees and proto-forms
  - English "water", from Proto-Germanic \*watōr, from PIE \*wódr̥
  - Mandarin 水 shuǐ, from Old Chinese \*lhuiʔ ("that which flows"),
    from Proto-Sino-Tibetan \*lwi(j) ("flow, stream")

![img/city.png]
![img/indoeuropean.png]
    
# History of the comparative method

- Philosophers in Europe and Asia have known for millenia that
  - There are some similarities between languages that cannot
    be explained by chance alone
  - Languages change

- As a branch of philology, historical linguistics was born as
  a "hot" science in the 17th century
  - Colonial enterprises, e.g. the analyses of Van Boxhorn (1612-1653)
    and the reconstructions of William Wotton (1713)
  - Religious missions, especially Jesuitic, e.g. Matteo Ricci and
    Xu Guangqi 徐光啓 (16th-17th century) and Lorenzo Hervás (1735-1809)

- "Orientalism" as in William Jones' discourse to the Asiatic
  Society (1786)

# Comparative method

- Mental model of the stair to that of trees

[images of scala natura and stemma]

- Progressive influence of Darwin and biological analogies
- German investment in "Indo-Germanic" studies, leading to the
  Neogrammarian tenets including:
  - Regularity of sound changes
  - Immediate and total effect of sound changes

# Comparative method

- Collection of data
- Identification of cognates
- Study of correspondences
- Reconstruction of sound changes
- Analysis of typology
- Correction of errors and repetition

[image for false cognates]
[other images?]

# Quantitative turn

- Statistical approaches have always been common, as in
  Sapir (1916)
- Computational methods begin in the 1950s with lexicostatistics
  and glottochronology
  - Morris Swadesh
  - Joseph Greenberg
  - Sergei Starostin and the Moscow School

# Cladistics and phylogenetics

- Computational phylogenetic approaches begin in the early 1990s
  with works such as Donald Ringe

- Impressive media coverage for Gray & Atkinson (2003)
  - Initial opposition by many traditional practitioners
  - Progressively more philogenetic analyses are being published,
    such as Sagart et al. (2019)

[picture for gray and atkinson]
[picture for sagart et al]

[picture of splits tree]
[picture of bayesian network]

# Projects

- WALS
- Glottolog
- Concepticon
- CLICS

ba1 - 八 EIGHT / 疤 SCAR
gen1 - 跟 FOLLOW / 根 ROOT

# Computer-Assisted Language Comparison

- In the scenario of increasing digital data, open access,
  and interdisciplinarity, the comparative method must expand
  - Not only major families, but also minority ones
  - Not only small groups with closed data, but a global
    collaboration on "fair" data
  - No "black-boxes", but results that help us understand
    human languages
  - Not only fascination with proto-forms, but collaboration
    with history, biology, psychology...

- Methods: alignment, cognate detection, correspondence detection
- Tools: lingpy, edictor
    
# Alignment

Given cognates for 水 such as Hakha "tîi", Bunan "tɕʰu",
Burmish (Rangoon) "je²²", Beijing "ʂuəi²¹⁴", Guangzhou "søy³⁵",
Jieyang "tsui³¹", Kiranti "ti", rGyalrong (Daofu) "ɣrə",
how can we align?

  | Language          | Alignments             |
  |-------------------|---|-----|---|----|-----|
  | Hakha             | - | t   | - | iː | -   |
  | Bunan             | - | tɕʰ | - | u  | -   |
  | Burmish (Rangoon) | - | j   | - | e  | ²²  |
  | Beijing           | - | ʂ   | u | əi | ²¹⁴ |
  | Guangzhou         | - | s   | ø | y  | ³⁵  |
  | Jieyang           | - | ts  | u | i  | ³¹  |
  | Kiranti           | - | t   | - | i  | -   |
  | rGyalrong (Daofu) | ɣ | r   | - | ə  | -   |

a potential alignment

##

Sequence alignment algorithms from bioinformatics such as
Needleman-Wunsch and Smith-Waterman, implemented in LingPy
as described in List (2014).

![img/nw.png]

# Cognate detection

- A problem of partitioning/clustering based in the correspondence
of alignment sites according to implied evolutionary models.
  - Edit Distance
    - Linguistic extensions (Dolgopolsky, SCA)
  - Flat clustering (hierarchical or graph-based)
  - LexStat
  - Machine learning (PMI similarity, Support Vector Machines)

## Edit distance
  
From Jieyang "tsui³¹" to Kiranti "ti", when already segmented and
aligned,

  | Edits | Rule           | Alignment          |
  | 0     |                | ts  | u | i  | ³¹  |
  | 1     | Delete tone    | ts  | u | i  | -   |
  | 2     | Delete vowel   | ts  | - | i  | -   |
  | 3     | Change initial | t   | - | i  | -   |
  
Three changes, that normalized by length of the alignment give a score of
1.0 - (3/4) = 0.75.

Every difference is equal, so that Beijing "ʂuəi²¹⁴" to
Guangzhou "søy³⁵" has a score of
0.0 (the initial, the medial, the nucleus, the coda, and tone are different).

Word pairs are considered cognates if they score below a given value, which
can be defined in term of the distribution of the pair scores among languages.

## Dolgo and other extensions

Early approaches solved this with sound classes, either based on
articulatory features or common patterns of development of sound changes,
where, for example, Beijing "ʂuəi²¹⁴" is 'S', 'Y', 'E', '0', '6' and
Guangzhou "søy³⁵" is 'S', 'U', 'Y', '2'.

sound class model with enhanced sound-class models
(such as SCA, that incorpirates prosodic strings)

## LexStat

LexStat, which
uses a permutation method to compute individual segmental similarities
fed to an alignment algorithm (thus allowing an instructed alignment)

## Correspondences

Network method
Mattis paper