import LatoBold from "@/assets/Lato-Bold.ttf";
import LatoBoldItalic from "@/assets/Lato-BoldItalic.ttf";
import LatoItalic from "@/assets/Lato-Italic.ttf";
import LatoRegular from "@/assets/Lato-Regular.ttf";
import type {
  BioObject,
  CertificationObject,
  EducationObject,
  ExperienceObject,
  ProjectObject,
} from "@/index";
import useConstants from "@/lib/custom-hooks/useConstants";
import useDateHelper from "@/lib/custom-hooks/useDateHelper";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";

export default function HomePdf() {
  const { converDate } = useDateHelper();
  const {
    json_bio,
    json_education,
    json_experiences,
    json_certification,
    json_projects,
  } = useConstants();
  const [shortBio, setShortBio] = useState<BioObject | null>(null);
  const [edu, setEdu] = useState<EducationObject | null>(null);
  const [exp, setExp] = useState<ExperienceObject[]>([]);
  const [certs, setCerts] = useState<CertificationObject[]>([]);
  const [proj, setProj] = useState<ProjectObject[]>([]);

  useEffect(() => {
    const fetchBio = async () => {
      await fetch(json_bio).then(async (res) => {
        const json = await res.json();
        json && setShortBio(json);
      });
    };
    fetchBio();
  }, [json_bio]);

  useEffect(() => {
    const fetchEdu = async () => {
      await fetch(json_education).then(async (res) => {
        const json = await res.json();
        json && setEdu(json[0]);
      });
    };
    fetchEdu();
  }, [json_education]);

  useEffect(() => {
    const fetchExp = async () => {
      await fetch(json_experiences).then(async (res) => {
        const json: ExperienceObject[] = await res.json();
        json && setExp(json.filter((item) => item.title !== "Blogger"));
      });
    };
    fetchExp();
  }, [json_experiences]);

  useEffect(() => {
    const fetchCert = async () => {
      await fetch(json_certification).then(async (res) => {
        const json: CertificationObject[] = await res.json();
        json && setCerts(json);
      });
    };
    fetchCert();
  }, [json_certification]);

  useEffect(() => {
    const fetchProj = async () => {
      await fetch(json_projects).then(async (res) => {
        const json: ProjectObject[] = await res.json();
        json && setProj(json);
      });
    };
    fetchProj();
  }, [json_projects]);

  Font.register({ family: "Lato-Regular", src: LatoRegular });
  Font.register({ family: "Lato-Bold", src: LatoBold });
  Font.register({ family: "Lato-Italic", src: LatoItalic });
  Font.register({ family: "Lato-BoldItalic", src: LatoBoldItalic });

  const styles = StyleSheet.create({
    doc: {
      height: "100vh",
      fontFamily: "Lato-Regular",
    },
    body: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingHorizontal: 45,
    },
    head: {
      flexDirection: "column",
    },
    headName: {
      fontFamily: "Lato-Bold",
      textAlign: "center",
      fontWeight: "extrabold",
      fontSize: 26,
    },
    headPosition: {
      fontFamily: "Lato-Bold",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 5,
    },
    headContacts: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      marginBottom: 20,
    },
    group: {
      display: "flex",
      flexDirection: "row",
    },
    section: {
      marginBottom: 10,
    },
    sectionHead: {
      fontFamily: "Lato-BoldItalic",
      fontSize: 12,
      color: "brown",
      textTransform: "capitalize",
      borderBottom: "2px solid brown",
      marginBottom: 5,
    },
    sectionText: {
      fontSize: 12,
    },
    sectionInlineList: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    sectionGrouped: {
      marginBottom: 65,
      flexGrow: 1,
    },
    fontBoldMD: {
      fontFamily: "Lato-Bold",
      fontSize: 14,
      fontWeight: "bold",
    },
    fontBoldSM: {
      fontFamily: "Lato-Bold",
      fontSize: 12,
      fontWeight: "bold",
    },
    fontNormal: {
      fontFamily: "Lato-Regular",
      fontSize: 12,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 8,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

  return (
    <Document
      style={styles.doc}
      author={shortBio?.name}
      creator={shortBio?.name}
      title={shortBio?.title}
      subject={shortBio?.title}
      keywords={shortBio?.position}
      producer="React PDF"
    >
      <Page style={styles.body} size="A4">
        <View style={styles.head}>
          <Text style={styles.headName}>{shortBio?.name}</Text>
          <Text style={styles.headPosition}>{shortBio?.position}</Text>

          <View style={styles.headContacts}>
            <Text>{shortBio?.town} | </Text>
            <Text>Phone: {shortBio?.phone} | </Text>
            <Text>Email: {shortBio?.email}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHead}>Summary</Text>
          <Text style={styles.sectionText}>{shortBio?.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHead}>Education</Text>
          <Text style={styles.fontBoldMD}>
            {edu?.instance} <Text style={styles.fontNormal}>({edu?.year})</Text>
          </Text>
          <Text style={styles.fontNormal}>
            {edu?.level} - GPA {edu?.gpa}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHead}>Professional Experience</Text>
          {exp.map((item, index) => (
            <View key={index} style={{ marginBottom: 7 }}>
              <Text style={{ ...styles.fontBoldMD }}>
                ·{" "}
                {item.instance
                  ? `${item.title} at ${item.instance}`
                  : item.title}{" "}
                <Text style={styles.fontNormal}>
                  ({converDate(item.startPeriod)} - {converDate(item.endPeriod)}
                  )
                </Text>
              </Text>
              <Text style={{ ...styles.fontBoldSM }}>{item.position}</Text>
              {item.description.map((item, subIndex) => (
                <Text
                  key={subIndex}
                  style={{ ...styles.fontNormal, marginLeft: 6 }}
                >
                  - {item}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.group}>
          <View style={{ ...styles.sectionGrouped, marginRight: 10 }}>
            <Text style={styles.sectionHead}>Soft Skill</Text>
            <View style={styles.sectionInlineList}>
              {shortBio?.skill.soft.map((item, index) => (
                <Text key={index} style={{ ...styles.sectionText }}>
                  {item}
                  {index + 1 < shortBio.skill.soft.length ? ", " : ""}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.sectionGrouped}>
            <Text style={styles.sectionHead}>Hard Skill</Text>
            <View style={styles.sectionInlineList}>
              {shortBio?.skill.hard.map((item, index) => (
                <Text key={index} style={styles.sectionText}>
                  {item}
                  {index + 1 < shortBio.skill.hard.length ? ", " : ""}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHead}>Certification</Text>
          {certs
            .sort((a, b) => a.year - b.year)
            .reverse()
            .map((item, index) => (
              <View key={index} style={{ marginBottom: 5 }}>
                <Text style={styles.fontBoldMD}>
                  · {item.name}{" "}
                  <Text style={styles.fontNormal}>({item.year})</Text>
                </Text>
                <Text style={{ ...styles.fontNormal, marginLeft: 6 }}>
                  {item.heldBy} - {item.in}
                </Text>
              </View>
            ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHead}>Portfolio</Text>
          {proj
            .sort((a, b) => a.year - b.year)
            .reverse()
            .map((item, index) => (
              <View key={index} style={{ marginBottom: 5 }}>
                <Text style={{ ...styles.fontNormal, marginBottom: 3 }}>
                  - {item.year}
                </Text>
                {item.data.map((subItem, subIndex) => (
                  <View key={subIndex} style={{ marginLeft: 6 }}>
                    <Text
                      style={{
                        ...styles.fontBoldSM,
                        marginRight: 2,
                        marginBottom: 2,
                      }}
                    >
                      · {subItem.title}{" "}
                      <Text style={styles.fontNormal}>
                        {subItem.url ? `(${subItem.url})` : null}
                      </Text>
                    </Text>
                  </View>
                ))}
              </View>
            ))}
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
