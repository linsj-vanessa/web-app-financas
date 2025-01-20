import React from 'react';
import styles from './homepage.module.css'; // Importe o arquivo CSS Module

const HomePage = () => {
    return (
       <div className={styles.container}>
           <aside className={styles.sidebar}>
               <div className={styles.logo}>F.</div>
               <nav className={styles.navigation}>
                   <a href="#">🏠</a>
                   <a href="#">📊</a>
                    <a href="#">💰</a>
                   <a href="#">👤</a>
              </nav>
           </aside>
           <main className={styles.mainContent}>
               <header className={styles.header}>
                   <div>
                        <h1>Hello Josh!</h1>
                        <p>It's good to see you again.</p>
                   </div>
                   <div>
                        {/* Imagem do Avatar */}
                    </div>
                </header>
                <div className={styles.saldoSection}>
                    <div>
                        <h3>Available on-card</h3>
                        <span className={styles.saldoValue}>$13,528.31</span>
                    </div>
                    <div>
                        <h3>Transfer Limit</h3>
                        <span className={styles.saldoValue}>$12,000</span>
                    </div>
                    <div className={styles.actions}>
                         <button>Pay</button>
                         <button>Deposit</button>
                    </div>
                </div>
                 <div className={styles.operationsSection}>
                     <h3>Operations</h3>
                     <div className={styles.operationsList}>
                        {/* Operação 1 */}
                            <div className={styles.operationItem}>
                             <div className={styles.operationDescription}>
                                <span>AT&T</span>
                                <span>Unlimited Family Plan</span>
                             </div>
                                <span>-$34.99</span>
                         </div>
                            {/* Operação 2 */}
                          <div className={styles.operationItem}>
                              <div className={styles.operationDescription}>
                                    <span>CC Subscription</span>
                                    <span>CC All Apps</span>
                                </div>
                                  <span>-$59.99</span>
                            </div>
                             {/* Operação 3 */}
                              <div className={styles.operationItem}>
                                   <div className={styles.operationDescription}>
                                     <span>Blizzard Entertainment</span>
                                   <span>6-Month Subscription</span>
                                </div>
                                    <span>-$79.89</span>
                             </div>
                             {/* Operação 4 */}
                              <div className={styles.operationItem}>
                                   <div className={styles.operationDescription}>
                                     <span>Netflix</span>
                                     <span>Basic Plan</span>
                                </div>
                                <span>-$7.99</span>
                               </div>
                            </div>
                   </div>
                <div className={styles.spendingSection}>
                    <h3>Spending this Month</h3>
                    {/* Gráfico Circular ou de Barras */}
                     <div className={styles.spendingChart}>
                             <span>$1,244.65</span>
                    </div>
                     <div className={styles.spendingList}>
                             {/* Gasto 1 */}
                               <div className={styles.spendingItem}>
                                   <div>
                                     <span>Utilities</span>
                                      <span>36%</span>
                                    </div>
                                     <span>$447.84</span>
                               </div>
                               {/* Gasto 2 */}
                             <div className={styles.spendingItem}>
                                <div>
                                    <span>Expenses</span>
                                   <span>12%</span>
                                </div>
                                 <span>$149.28</span>
                               </div>
                               {/* Gasto 3 */}
                              <div className={styles.spendingItem}>
                                   <div>
                                     <span>Payments</span>
                                    <span>20%</span>
                                </div>
                                   <span>$248.8</span>
                               </div>
                            {/* Gasto 4 */}
                                <div className={styles.spendingItem}>
                                     <div>
                                        <span>Subscriptions</span>
                                       <span>8%</span>
                                    </div>
                                     <span>$99.52</span>
                                </div>
                        </div>
                </div>
               <div className={styles.premiumSection}>
                     <h3>Lern even more!</h3>
                       <p>Unlock premium features only for $9.99 per month.</p>
                    <button>Go Premium</button>
               </div>
           </main>
       </div>
    );
};
export default HomePage;