# Historical linguistics

- HT is the general scientific study of linguistic change and evolution
  in time

- HT is frequently taken as a synonym for "comparative linguistics",
  or even for "Indo-European studies"

- Laymen are more familiar with family trees and proto-forms
  - English "water", from Proto-Germanic \*watōr, from PIE \*wódr̥
  - Mandarin 水 shuǐ, from Old Chinese \*lhuiʔ ("that which flows"),
    from Proto-Sino-Tibetan \*lwi(j) ("flow, stream")

![img/indoeuropean.png]
![img/city.png]

# History of the comparative method

- Philosophers in Europe and Asia have debated for millenia how:
  - Languages show similarities that cannot be explained
    by chance alone
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

- Mental model of "stair" replaced by that of "tree"

![img/scalanaturae.jpg]
![img/tree.gif]

- Progressive influence of Darwin and biological analogies

- German promotion of "Indo-Germanic" studies, leading to the
  Neogrammarian tenets including:
  - Regularity of sound changes
  - Immediate and total effect of sound changes

# Traditional workflow

- Collection of data
- Identification of cognates
- Study of correspondences
- Reconstruction of sound changes
- Analysis of typology
- Correction of errors and repetition

![img/false_cognates.jpg]

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

![img/austronesian.jpg]
![img/bayesian.png]
![img/splitstree.png]

# Computer-Assisted Language Comparison

- In the scenario of increasing digital data, open access,
  and interdisciplinarity, the comparative method must expand:
  - Not only major families, but also minority ones
  - Not only small laboratories with closed data, but a global
    collaboration on "fair" data
  - Avoid "black-boxes", favoring results that help us understand
    human languages
  - Not only fascination with proto-forms, but collaboration
    with history, biology, psychology...

- Methods: alignment, cognate detection, correspondence detection
- Tools: LingPy, edictor

# LingPy

- Programming library for historical linguistics, state of the art:
  - multiple phonetic alignment: 98% (pair score, List, 2014)
  - automatic cognate detection: 89% (B-Cubed scores, List et al., 2017)
  - phylogenetic reconstruction: 0.08 (Gen. Quart. Dist, Rama et al., 2018)
  - correspondence pattern identification: NP-hard (no human attempts, List, 2019)

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

## Alignment methods

Sequence alignment algorithms from bioinformatics such as
Needleman-Wunsch and Smith-Waterman, implemented in LingPy
as described in List (2014).

![img/nw.png]

# Cognate detection

- A problem of partitioning/clustering based in the correspondence
of alignment sites according to implied evolutionary models.
  - *Edit Distance*
    - *Linguistic extensions (Dolgopolsky, SCA)*
  - Flat clustering (hierarchical or graph-based)
  - *LexStat*
  - Machine learning (PMI similarity, Support Vector Machines)

## Edit distance - I

- Comparing Jieyang "tsui³¹" to Kiranti "ti", there are three
changes over four alignment positions, thus a score of
1.0 - (3/4) = 0.75.

  | Edits | Rule           | Alignment          |
  | 0     |                | ts  | u | i  | ³¹  |
  | 1     | Delete tone    | ts  | u | i  | -   |
  | 2     | Delete vowel   | ts  | - | i  | -   |
  | 3     | Change initial | t   | - | i  | -   |

## Edit distance -- II

- Two words are considered cognates if their edit distance score
is above a given value (threshold), which can be decided from
the distribution of pair scores.

- Serious limits in a na"ive approach: Beijing "ʂuəi²¹⁴" and
Guangzhou "søy³⁵" have a score of 0.0
  - The initial, the medial, the nucleus, the coda, and tone are different

## Extensions to edit distance

- Early solutions compared not *sounds*, but *sound classes*
  - In the SCA model, Beijing "ʂuəi²¹⁴" is "SYE06" and
    Guangzhou "søy³⁵" is "SUY02".
  - Classes can be based on articulatory features or global
    patterns of sound change
  - More advanced models involve additional information,
    such as SCA which incorporates prosodic strings

## LexStat

- LexStat is an advanced method that emulates the reasoning
  behind human judgement for cognacy

- The method involves multiple *permutations* that allow to
  compute individual segment similarities
  - The expected similarities allow a specific and instructed
    alignment, whose score is used for cognacy judgment

## Correspondences

- New network approach for the inference of sound correspondence
  patterns across multiple languages

- Columns in aligned cognate sets are the nodes, the compatibility
  between nodes are the edge weights
  - Compatible correspondence sets are detected by
    "minimum clique cover problem"

![ims/correspondences.png]
