<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | SAiX LABS</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #d1e2f2;
            background-color: #030a14;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 960px;
            margin: 0 auto;
            background: #071728;
            border: 1px solid rgba(57, 213, 255, 0.25);
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.5);
          }
          h1 {
            color: #ffffff;
            font-size: 24px;
            margin: 0 0 10px 0;
          }
          p {
            color: #8da4be;
            font-size: 14px;
            margin: 0 0 25px 0;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
          }
          th {
            background-color: #0d233a;
            color: #39d5ff;
            text-align: left;
            padding: 12px 14px;
            font-weight: 600;
            border-bottom: 2px solid rgba(57, 213, 255, 0.3);
          }
          td {
            padding: 12px 14px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          tr:hover td {
            background-color: rgba(57, 213, 255, 0.05);
          }
          a {
            color: #39d5ff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 6px;
            background: rgba(57, 213, 255, 0.12);
            color: #39d5ff;
            font-size: 12px;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>SAiX LABS XML Sitemap</h1>
          <p>This is an XML sitemap generated for search engines like Google and Bing. Below is the list of indexed pages.</p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="badge">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
